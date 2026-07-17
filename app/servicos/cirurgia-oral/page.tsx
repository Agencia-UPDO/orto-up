import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Cirurgia Oral',
  description: 'Procedimentos de cirurgia oral realizados com segurança e técnica apurada. Conheça a cirurgia oral da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/cirurgia-oral' },
};

export default function CirurgiaOral() {
  return (
    <ServiceDetail
      title="Cirurgia Oral"
      icon="/images/icons/icon-dentes-saudaveis.png"
      image="/images/services/cirurgia-oral-01.jpg"
      image2="/images/services/cirurgia-oral-02.jpg"
      intro="Realizamos procedimentos de cirurgia oral com segurança e técnica apurada, sempre com foco no conforto e no bem-estar do paciente durante todo o processo."
      highlights={[
        'Extrações e pequenos procedimentos cirúrgicos',
        'Avaliação criteriosa antes de cada procedimento',
        'Protocolos de segurança e conforto',
        'Orientações claras para o pós-operatório',
      ]}
      steps={[
        { title: 'Avaliação Pré-Operatória', description: 'Exames e planejamento cuidadoso do procedimento.' },
        { title: 'Anestesia', description: 'Aplicação de anestesia para garantir conforto durante a cirurgia.' },
        { title: 'Procedimento Cirúrgico', description: 'Realizado com técnica apurada e foco na segurança do paciente.' },
        { title: 'Pós-Operatório', description: 'Orientações claras e acompanhamento da recuperação.' },
      ]}
      indicatedFor={[
        'Extração de dentes, incluindo dentes do siso',
        'Pequenas cirurgias na região bucal',
        'Casos que exigem avaliação e intervenção cirúrgica',
      ]}
    />
  );
}
