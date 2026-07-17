import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description: 'Termos e condições de uso do site da Orto Up Clínica Odontológica.',
  alternates: { canonical: '/termos-e-condicoes' },
};

const sections = [
  { id: 'aceitacao', label: 'Aceitação dos termos' },
  { id: 'finalidade', label: 'Finalidade do site' },
  { id: 'agendamentos', label: 'Contatos e agendamentos' },
  { id: 'servicos', label: 'Serviços odontológicos' },
  { id: 'uso', label: 'Uso adequado' },
  { id: 'propriedade', label: 'Propriedade intelectual' },
  { id: 'terceiros', label: 'Links e serviços de terceiros' },
  { id: 'responsabilidade', label: 'Disponibilidade e responsabilidade' },
  { id: 'privacidade', label: 'Privacidade' },
  { id: 'alteracoes', label: 'Alterações e legislação' },
  { id: 'contato', label: 'Contato' },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos e Condições"
      description="Estes Termos e Condições regulam o acesso e o uso do site da Orto Up Clínica Odontológica. Ao navegar por este site ou utilizar seus canais de contato, você declara estar ciente das regras abaixo."
      updatedAt="17 de julho de 2026"
      sections={sections}
    >
      <section id="aceitacao" className="legal-section">
        <h2>1. Aceitação dos termos</h2>
        <p>O site é mantido pela Orto Up Clínica Odontológica, inscrita no CNPJ sob o nº 11.213.984/0001-05 e no CRO Clínica sob o nº 1856, com endereço na Rua Almirante Alexandrino, 2300, Afonso Pena, São José dos Pinhais/PR, CEP 83045-210.</p>
        <p>Se você não concordar com estes termos, recomendamos que interrompa a navegação e não utilize os formulários disponibilizados.</p>
      </section>

      <section id="finalidade" className="legal-section">
        <h2>2. Finalidade do site</h2>
        <p>O site apresenta informações institucionais, especialidades odontológicas, localização, horários de atendimento e canais para contato ou solicitação de agendamento.</p>
        <div className="legal-notice"><strong>Atenção:</strong> o conteúdo tem caráter informativo e não substitui consulta, diagnóstico, prescrição ou avaliação individual por cirurgião-dentista. Em situações de urgência ou emergência, procure atendimento profissional imediato.</div>
      </section>

      <section id="agendamentos" className="legal-section">
        <h2>3. Contatos e agendamentos</h2>
        <p>O envio de um formulário ou de uma mensagem representa uma solicitação de contato e não garante, por si só, a confirmação de consulta, horário, procedimento, preço ou cobertura por plano odontológico.</p>
        <p>A confirmação ocorrerá pelos canais informados pelo usuário. Você se compromete a fornecer dados verdadeiros, atualizados e suficientes para o retorno da equipe. Caso não possa comparecer, pedimos que comunique a clínica com antecedência.</p>
      </section>

      <section id="servicos" className="legal-section">
        <h2>4. Serviços odontológicos</h2>
        <p>Indicações, resultados esperados, riscos, alternativas, prazos e valores dependem de avaliação clínica. As condições específicas de cada tratamento serão apresentadas em documentos próprios, como plano de tratamento, orçamento e termo de consentimento, quando aplicável.</p>
        <p>A menção a convênios ou planos de saúde não assegura cobertura. Elegibilidade, carências, autorizações e procedimentos cobertos devem ser confirmados para cada caso.</p>
      </section>

      <section id="uso" className="legal-section">
        <h2>5. Uso adequado</h2>
        <p>Ao utilizar o site, você concorda em não:</p>
        <ul>
          <li>praticar atos ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
          <li>tentar acessar áreas, sistemas ou dados sem autorização;</li>
          <li>interferir no funcionamento, na segurança ou na disponibilidade do site;</li>
          <li>inserir conteúdo malicioso ou utilizar os formulários para envio de spam;</li>
          <li>copiar ou explorar o conteúdo do site para fins comerciais sem autorização.</li>
        </ul>
      </section>

      <section id="propriedade" className="legal-section">
        <h2>6. Propriedade intelectual</h2>
        <p>Textos, marcas, logotipos, fotografias, vídeos, elementos visuais e demais conteúdos próprios são protegidos pela legislação aplicável. O acesso ao site não transfere ao usuário qualquer direito de propriedade intelectual.</p>
        <p>É permitida a consulta para uso pessoal e não comercial. Reprodução, alteração, distribuição ou exploração dependem de autorização prévia, salvo nas hipóteses permitidas por lei.</p>
      </section>

      <section id="terceiros" className="legal-section">
        <h2>7. Links e serviços de terceiros</h2>
        <p>O site pode apresentar recursos ou links de terceiros, como mapas, avaliações, redes sociais e WhatsApp. Esses ambientes possuem termos e políticas próprios, e a Orto Up não controla seu conteúdo, disponibilidade ou práticas de privacidade.</p>
      </section>

      <section id="responsabilidade" className="legal-section">
        <h2>8. Disponibilidade e responsabilidade</h2>
        <p>Empregamos esforços razoáveis para manter informações corretas e o site disponível, mas podem ocorrer indisponibilidades, falhas técnicas ou desatualizações. Quando identificarmos erro relevante, poderemos corrigi-lo sem aviso prévio.</p>
        <p>Na extensão permitida pela legislação, a Orto Up não se responsabiliza por decisões clínicas tomadas exclusivamente com base no conteúdo geral deste site, por falhas causadas por terceiros ou por uso contrário a estes termos. Nada nesta cláusula limita direitos assegurados ao consumidor.</p>
      </section>

      <section id="privacidade" className="legal-section">
        <h2>9. Privacidade</h2>
        <p>O tratamento de dados pessoais relacionado ao site segue nossa <Link className="id-color fw-bold" href="/politica-de-privacidade">Política de Privacidade</Link>, que integra estes termos.</p>
      </section>

      <section id="alteracoes" className="legal-section">
        <h2>10. Alterações e legislação aplicável</h2>
        <p>Estes termos podem ser atualizados para refletir mudanças no site, nos serviços ou na legislação. A versão vigente e sua data de atualização permanecerão publicadas nesta página.</p>
        <p>Aplicam-se as leis da República Federativa do Brasil. Eventuais controvérsias serão solucionadas no foro competente conforme a legislação, preservados os direitos do consumidor, inclusive quanto ao foro de seu domicílio quando aplicável.</p>
      </section>

      <section id="contato" className="legal-section">
        <h2>11. Contato</h2>
        <p>Dúvidas sobre estes termos podem ser enviadas para <a className="id-color fw-bold" href="mailto:ortoup@ortoup.com.br">ortoup@ortoup.com.br</a>, pelo telefone/WhatsApp <a className="id-color fw-bold" href="https://wa.me/5541998497676">(41) 99849-7676</a> ou por nossa <Link className="id-color fw-bold" href="/contato">página de contato</Link>.</p>
      </section>
    </LegalPage>
  );
}
