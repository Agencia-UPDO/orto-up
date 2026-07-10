'use client';

import emailjs from '@emailjs/browser';
import { useMemo, useRef, useState } from 'react';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
const BOOKING_EMAILJS_SERVICE_ID = '';
const BOOKING_EMAILJS_TEMPLATE_ID = '';
const BOOKING_EMAILJS_PUBLIC_KEY = '';

export default function BookingForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const serviceId = BOOKING_EMAILJS_SERVICE_ID.trim();
    const templateId = BOOKING_EMAILJS_TEMPLATE_ID.trim();
    const publicKey = BOOKING_EMAILJS_PUBLIC_KEY.trim();

    if (!formRef.current) {
      setStatus('error');
      setErrorMessage('Formulário indisponível. Tente atualizar a página.');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      const formData = new FormData(formRef.current);
      const mailto = `mailto:ortoup@ortoup.com.br?subject=Agendamento de Consulta - ${formData.get('service')}&body=Nome: ${formData.get('name')}%0D%0AE-mail: ${formData.get('email')}%0D%0ATelefone: ${formData.get('phone')}%0D%0AServiço: ${formData.get('service')}%0D%0AData: ${formData.get('date')}%0D%0AHorário: ${formData.get('time')}%0D%0AMensagem: ${formData.get('message')}`;
      window.location.href = mailto;
      setStatus('success');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Falha ao enviar o agendamento. Tente novamente ou fale conosco diretamente.');
    }
  };

  return (
    <div className="relative">
      {status === 'success' ? (
        <div id="success_message_col" className="success p-40 h-100" style={{ display: 'block' }}>
          <h3>Obrigado pelo seu Agendamento</h3>
          <p>Recebemos sua solicitação e em breve entraremos em contato. Clique no botão abaixo se quiser fazer outro agendamento.</p>
          <button
            type="button"
            className="btn-main"
            onClick={() => setStatus('idle')}
          >
            Novo Agendamento
          </button>
        </div>
      ) : (
        <form ref={formRef} name="bookingForm" id="booking_form" onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-lg-12">
              <h3 className="mb-3"><i className="fa fa-envelope-o id-color me-2"></i> Agende sua Consulta</h3>
              <p>Agende hoje mesmo sua consulta e receba um cuidado odontológico especializado feito sob medida para você. Um sorriso saudável e bonito começa com um passo simples, agende agora!</p>
              <div className="relative">
                <select name="service" id="service" className="form-control" defaultValue="" required>
                  <option disabled value="">Selecione o Serviço</option>
                  <option value="Implantes Dentários">Implantes Dentários</option>
                  <option value="Ortodontia">Ortodontia</option>
                  <option value="Alinhadores Invisíveis">Alinhadores Invisíveis</option>
                  <option value="Clareamento Dental">Clareamento Dental</option>
                  <option value="Lentes de Contato Dental">Lentes de Contato Dental</option>
                  <option value="Endodontia">Endodontia</option>
                  <option value="Prótese Dentária">Prótese Dentária</option>
                  <option value="Cirurgia Oral">Cirurgia Oral</option>
                  <option value="Clínica Geral">Clínica Geral</option>
                </select>
                <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
              </div>
            </div>

            <div className="col-lg-6">
              <div id="date" className="relative input-group date" data-date-format="mm-dd-yyyy">
                <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-calendar"></i>
                <input className="form-control" name="date" type="date" min={today} required />
                <span className="input-group-addon"><i className="glyphicon glyphicon-calendar"></i></span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="relative">
                <select name="time" id="time" className="form-control" defaultValue="" required>
                  <option disabled value="">Selecione o Horário</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
                <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
              </div>
            </div>

            <div className="col-lg-4">
              <input type="text" name="name" id="name" placeholder="Nome" className="form-control" required />
            </div>

            <div className="col-lg-4">
              <input type="email" name="email" id="email" placeholder="E-mail" className="form-control" required />
            </div>

            <div className="col-lg-4">
              <input type="text" name="phone" id="phone" placeholder="Telefone" className="form-control" required />
            </div>

            <div className="col-lg-12">
              <textarea name="message" id="message" className="form-control" placeholder="Mensagem"></textarea>
            </div>

            <div className="col-lg-12">
              <div id="submit">
                <input
                  type="submit"
                  id="send_message"
                  value={status === 'sending' ? 'Enviando...' : 'Enviar Agendamento'}
                  className="btn-main"
                  disabled={status === 'sending'}
                />
              </div>
            </div>
          </div>

          {status === 'error' && (
            <div id="error_message" className="error" style={{ display: 'block' }}>
              {errorMessage}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
