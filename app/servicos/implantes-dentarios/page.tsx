import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Implantes Dentários',
  description: 'Implante dentário sem corte, com cirurgia guiada por planejamento digital. Conheça o tratamento de implantes da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/implantes-dentarios' },
};

export default function ImplantesDentarios() {
  return (
    <ServiceDetail
      title="Implantes Dentários"
      icon="/images/icons/icon-implantes.png"
      image="/images/services/implante-dentario-01.jpg"
      image2="/images/services/implante-dentario-02.jpg"
      intro="Contamos com a tecnologia de implante sem corte: por meio de um guia cirúrgico personalizado, realizamos a cirurgia guiada com mais precisão, previsibilidade e conforto para o paciente."
      highlights={[
        'Cirurgia guiada por planejamento digital, sem necessidade de corte',
        'Substituição de um ou mais dentes ausentes com uma base fixa e estável',
        'Procedimento planejado individualmente para cada caso',
        'Recuperação mais confortável em comparação às técnicas convencionais',
      ]}
      steps={[
        { title: 'Avaliação e Planejamento', description: 'Exame clínico e radiográfico para planejar a cirurgia guiada com precisão.' },
        { title: 'Cirurgia Guiada', description: 'Instalação do implante sem corte, com guia cirúrgico personalizado.' },
        { title: 'Cicatrização', description: 'Período de osseointegração, em que o implante se une ao osso.' },
        { title: 'Instalação da Coroa', description: 'Finalização do tratamento com a prótese sobre o implante.' },
      ]}
      indicatedFor={[
        'Quem perdeu um ou mais dentes',
        'Quem usa prótese removível e busca mais estabilidade e conforto',
        'Pacientes com estrutura óssea adequada, avaliada em consulta',
      ]}
    />
  );
}
