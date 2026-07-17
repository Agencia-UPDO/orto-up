import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Saiba como a Orto Up coleta, utiliza, protege e compartilha dados pessoais conforme a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
};

const sections = [
  { id: 'controlador', label: 'Quem trata seus dados' },
  { id: 'dados', label: 'Dados que podemos coletar' },
  { id: 'finalidades', label: 'Finalidades e bases legais' },
  { id: 'saude', label: 'Dados pessoais sensíveis' },
  { id: 'compartilhamento', label: 'Compartilhamento' },
  { id: 'cookies', label: 'Cookies e tecnologias' },
  { id: 'transferencia', label: 'Transferência internacional' },
  { id: 'retencao', label: 'Retenção e segurança' },
  { id: 'direitos', label: 'Seus direitos' },
  { id: 'menores', label: 'Crianças e adolescentes' },
  { id: 'alteracoes', label: 'Alterações desta política' },
  { id: 'contato', label: 'Contato sobre privacidade' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      description="A Orto Up respeita sua privacidade e trata dados pessoais com transparência, segurança e apenas para finalidades legítimas. Esta política explica as práticas relacionadas ao site e aos canais digitais da clínica, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018)."
      updatedAt="17 de julho de 2026"
      sections={sections}
    >
      <section id="controlador" className="legal-section">
        <h2>1. Quem trata seus dados</h2>
        <p>A controladora dos dados é a Orto Up Clínica Odontológica, CNPJ nº 11.213.984/0001-05, CRO Clínica nº 1856, com endereço na Rua Almirante Alexandrino, 2300, Afonso Pena, São José dos Pinhais/PR, CEP 83045-210.</p>
        <p>Para assuntos relacionados à privacidade e à proteção de dados, utilize o e-mail <a className="id-color fw-bold" href="mailto:ortoup@ortoup.com.br">ortoup@ortoup.com.br</a>.</p>
      </section>

      <section id="dados" className="legal-section">
        <h2>2. Dados que podemos coletar</h2>
        <p>Conforme sua interação com a Orto Up, podemos tratar:</p>
        <ul>
          <li><strong>dados de identificação e contato:</strong> nome, telefone, e-mail e demais informações fornecidas por você;</li>
          <li><strong>dados de agendamento:</strong> serviço de interesse, data ou período pretendido e conteúdo da mensagem;</li>
          <li><strong>dados de atendimento:</strong> informações necessárias à prestação de serviços odontológicos, coletadas em ambiente e documentos apropriados;</li>
          <li><strong>dados técnicos:</strong> endereço IP, tipo de dispositivo e navegador, registros de acesso e informações obtidas por cookies, quando disponíveis;</li>
          <li><strong>dados de interação:</strong> registros de comunicações realizadas por formulário, e-mail, telefone, WhatsApp ou outros canais escolhidos por você.</li>
        </ul>
        <p>Os campos obrigatórios são indicados no momento da coleta. A ausência de dados essenciais poderá impedir o retorno ou a execução da solicitação.</p>
      </section>

      <section id="finalidades" className="legal-section">
        <h2>3. Finalidades e bases legais</h2>
        <p>Podemos tratar dados para:</p>
        <ul>
          <li>responder dúvidas, solicitações e pedidos de agendamento;</li>
          <li>confirmar consultas e enviar comunicações relacionadas ao atendimento;</li>
          <li>prestar serviços odontológicos e manter os respectivos registros;</li>
          <li>cumprir obrigações legais, regulatórias, éticas e profissionais;</li>
          <li>prevenir fraudes, proteger direitos e manter a segurança do site;</li>
          <li>aprimorar a experiência, a funcionalidade e o desempenho dos canais digitais;</li>
          <li>enviar comunicações informativas ou promocionais, quando houver uma base legal adequada e respeitado o direito de oposição.</li>
        </ul>
        <p>As bases legais podem incluir procedimentos preliminares e execução de contrato, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, tutela da saúde, legítimo interesse e consentimento, conforme a finalidade e a categoria do dado.</p>
      </section>

      <section id="saude" className="legal-section">
        <h2>4. Dados pessoais sensíveis e de saúde</h2>
        <p>Dados de saúde são sensíveis e recebem proteção reforçada. No contexto assistencial, seu tratamento ocorre quando necessário à tutela da saúde, realizado por profissionais ou serviços de saúde, e nas demais hipóteses previstas em lei.</p>
        <div className="legal-notice">Evite enviar exames, diagnósticos ou detalhes clínicos pelos formulários gerais do site. A equipe indicará o canal adequado quando essas informações forem necessárias.</div>
      </section>

      <section id="compartilhamento" className="legal-section">
        <h2>5. Compartilhamento de dados</h2>
        <p>Os dados poderão ser compartilhados, na medida necessária, com:</p>
        <ul>
          <li>profissionais e equipes envolvidos no atendimento;</li>
          <li>operadoras de planos odontológicos, laboratórios e parceiros assistenciais, quando aplicável ao tratamento;</li>
          <li>fornecedores de hospedagem, tecnologia, comunicação, formulários e segurança;</li>
          <li>autoridades públicas, conselhos profissionais ou terceiros, quando exigido por lei ou necessário ao exercício de direitos.</li>
        </ul>
        <p>Não comercializamos dados pessoais. Exigimos que prestadores tratem as informações de acordo com nossas instruções, com confidencialidade e proteção compatível.</p>
      </section>

      <section id="cookies" className="legal-section">
        <h2>6. Cookies e tecnologias semelhantes</h2>
        <p>Cookies são pequenos arquivos utilizados para permitir funcionalidades, manter segurança, lembrar preferências e entender o desempenho do site. Alguns recursos incorporados ou links, como mapas, avaliações, redes sociais e WhatsApp, podem ser fornecidos por terceiros e seguir políticas próprias.</p>
        <p>Você pode restringir cookies nas configurações do navegador. O bloqueio de cookies essenciais poderá afetar algumas funcionalidades. Quando a legislação exigir, solicitaremos sua escolha antes de ativar categorias não essenciais.</p>
      </section>

      <section id="transferencia" className="legal-section">
        <h2>7. Transferência internacional</h2>
        <p>Alguns fornecedores de tecnologia podem armazenar ou processar dados fora do Brasil. Quando isso ocorrer, adotaremos medidas para que a transferência observe a LGPD, incluindo salvaguardas contratuais e avaliação das práticas de proteção do destinatário, conforme aplicável.</p>
      </section>

      <section id="retencao" className="legal-section">
        <h2>8. Retenção e segurança</h2>
        <p>Conservamos dados pelo tempo necessário para cumprir as finalidades informadas, atender prazos legais e regulatórios, manter registros clínicos e exercer direitos. Depois disso, os dados serão eliminados, anonimizados ou mantidos quando a legislação autorizar.</p>
        <p>Adotamos medidas administrativas e técnicas proporcionais aos riscos para reduzir acessos não autorizados, perda, alteração ou divulgação indevida. Nenhum ambiente digital é totalmente livre de riscos; por isso, também recomendamos que você proteja seus dispositivos e não compartilhe credenciais ou informações confidenciais por canais inseguros.</p>
      </section>

      <section id="direitos" className="legal-section">
        <h2>9. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar, quando aplicável:</p>
        <ul>
          <li>confirmação da existência de tratamento e acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
          <li>portabilidade, observada a regulamentação e os segredos comercial e industrial;</li>
          <li>informações sobre compartilhamentos e sobre a possibilidade de não consentir;</li>
          <li>revogação do consentimento e eliminação dos dados tratados com essa base, ressalvadas as hipóteses legais de conservação;</li>
          <li>oposição a tratamento realizado em desacordo com a lei e revisão de decisões automatizadas, se existentes.</li>
        </ul>
        <p>Para proteger o titular, poderemos solicitar informações que confirmem sua identidade. Responderemos dentro dos prazos legais. Você também pode apresentar petição à Autoridade Nacional de Proteção de Dados (ANPD).</p>
      </section>

      <section id="menores" className="legal-section">
        <h2>10. Crianças e adolescentes</h2>
        <p>O tratamento de dados de crianças e adolescentes observará seu melhor interesse e as exigências legais aplicáveis. Solicitações relacionadas a menores devem ser realizadas ou acompanhadas por responsável legal, ressalvadas as hipóteses permitidas em lei.</p>
      </section>

      <section id="alteracoes" className="legal-section">
        <h2>11. Alterações desta política</h2>
        <p>Esta política poderá ser atualizada para refletir mudanças nas práticas, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão disponíveis nesta página.</p>
      </section>

      <section id="contato" className="legal-section">
        <h2>12. Contato sobre privacidade</h2>
        <p>Para exercer direitos ou esclarecer dúvidas, escreva para <a className="id-color fw-bold" href="mailto:ortoup@ortoup.com.br">ortoup@ortoup.com.br</a>, ligue ou envie mensagem para <a className="id-color fw-bold" href="https://wa.me/5541998497676">(41) 99849-7676</a>, ou acesse nossa <Link className="id-color fw-bold" href="/contato">página de contato</Link>.</p>
      </section>
    </LegalPage>
  );
}
