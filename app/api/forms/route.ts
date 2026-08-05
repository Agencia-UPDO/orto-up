import { Resend } from 'resend';

export const runtime = 'nodejs';

type FormPayload = Record<string, unknown>;

const notificationEmail = process.env.FORM_NOTIFICATION_EMAIL || 'recepcao@ortoup.com.br';
const fromEmail = process.env.RESEND_FROM_EMAIL || 'Orto Up <formularios@ortoup.com.br>';
const allowedTimes = new Set([
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
]);

function getString(payload: FormPayload, key: string, maxLength: number, required = true) {
  const value = typeof payload[key] === 'string' ? payload[key].trim() : '';

  if (required && !value) {
    throw new Error(`O campo ${key} é obrigatório.`);
  }

  if (value.length > maxLength) {
    throw new Error(`O campo ${key} excedeu o tamanho permitido.`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };

    return entities[character];
  });
}

function formatDate(value: string) {
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:700;color:#17264f;vertical-align:top">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;color:#4d596f">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { message: 'O envio está temporariamente indisponível. Fale conosco pelo WhatsApp.' },
      { status: 503 },
    );
  }

  let payload: FormPayload;

  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('Conteúdo inválido.');
    }
    payload = parsed as FormPayload;
  } catch {
    return Response.json({ message: 'Não foi possível processar o formulário.' }, { status: 400 });
  }

  // Campo invisível: robôs que o preencherem recebem sucesso sem disparar e-mail.
  if (typeof payload.website === 'string' && payload.website.trim()) {
    return Response.json({ success: true });
  }

  try {
    const type = getString(payload, 'type', 20);
    const name = getString(payload, 'name', 120).replace(/\s+/g, ' ');
    const email = getString(payload, 'email', 254).toLowerCase();
    const phone = getString(payload, 'phone', 40).replace(/\s+/g, ' ');
    const message = getString(payload, 'message', 3000, false);

    if (type !== 'booking' && type !== 'contact') {
      throw new Error('Tipo de formulário inválido.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Informe um e-mail válido.');
    }

    const rows = [
      fieldRow('Nome', name),
      fieldRow('E-mail', email),
      fieldRow('Telefone', phone),
    ];
    const textLines = [`Nome: ${name}`, `E-mail: ${email}`, `Telefone: ${phone}`];
    let subject = `Novo contato pelo site — ${name}`;

    if (type === 'booking') {
      const service = getString(payload, 'service', 120).replace(/\s+/g, ' ');
      const date = getString(payload, 'date', 10);
      const time = getString(payload, 'time', 5);

      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error('Informe uma data válida.');
      }

      if (!allowedTimes.has(time)) {
        throw new Error('Selecione um horário válido, entre 10h e 19h.');
      }

      subject = `Novo agendamento — ${service} — ${name}`;
      rows.push(
        fieldRow('Serviço', service),
        fieldRow('Data', formatDate(date)),
        fieldRow('Horário', time),
      );
      textLines.push(`Serviço: ${service}`, `Data: ${formatDate(date)}`, `Horário: ${time}`);
    }

    if (message) {
      rows.push(fieldRow('Mensagem', message));
      textLines.push(`Mensagem: ${message}`);
    }

    const title = type === 'booking' ? 'Nova solicitação de agendamento' : 'Nova mensagem pelo site';
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      replyTo: email,
      subject,
      html: `
        <div style="background:#f6f3f8;padding:32px;font-family:Arial,sans-serif">
          <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #ece6f0">
            <div style="background:#71468c;color:#fff;padding:24px 28px">
              <div style="font-size:13px;text-transform:uppercase;letter-spacing:.08em;opacity:.8">Orto Up</div>
              <h1 style="font-size:24px;line-height:1.3;margin:6px 0 0">${title}</h1>
            </div>
            <table role="presentation" style="width:100%;border-collapse:collapse;margin:16px 0 20px">
              <tbody>${rows.join('')}</tbody>
            </table>
            <p style="margin:0;padding:0 28px 24px;color:#7b8495;font-size:13px">
              Enviado automaticamente pelo formulário do site da Orto Up.
            </p>
          </div>
        </div>
      `,
      text: `${title}\n\n${textLines.join('\n')}\n\nEnviado automaticamente pelo site da Orto Up.`,
      tags: [{ name: 'form_type', value: type }],
    });

    if (error) {
      console.error('Falha no envio pelo Resend:', error.name);
      return Response.json(
        { message: 'Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.' },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Dados inválidos.';
    return Response.json({ message }, { status: 400 });
  }
}
