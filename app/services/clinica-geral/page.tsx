import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Clínica Geral',
  description: 'Exames, limpezas e restaurações de rotina para a base da sua saúde bucal. Conheça o atendimento de clínica geral da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/services/clinica-geral' },
};

export default function ClinicaGeral() {
  return (
    <ServiceDetail
      title="Clínica Geral"
      icon="/images/icons/icon-limpeza-de-dente.png"
      image="/images/services/clinica-geral-01.jpg"
      image2="/images/services/clinica-geral-02.jpg"
      intro="Exames, limpezas e restaurações de rotina formam a base de uma boa saúde bucal. Cuidamos da prevenção e do tratamento das necessidades do dia a dia com atenção e atendimento humanizado."
      highlights={[
        'Exames clínicos e diagnóstico',
        'Limpeza e profilaxia',
        'Restaurações de rotina',
        'Acompanhamento contínuo da saúde bucal',
      ]}
      steps={[
        { title: 'Consulta de Rotina', description: 'Exame clínico completo para avaliar sua saúde bucal.' },
        { title: 'Diagnóstico', description: 'Identificação de eventuais necessidades de tratamento.' },
        { title: 'Tratamento', description: 'Limpeza, restaurações ou encaminhamento para especialidades.' },
        { title: 'Retorno Periódico', description: 'Acompanhamento contínuo, com consultas a cada 6 meses.' },
      ]}
      indicatedFor={[
        'Consultas de rotina e prevenção',
        'Cáries e pequenas restaurações',
        'Toda a família, do check-up de crianças a adultos',
      ]}
    />
  );
}
