import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Endodontia',
  description: 'Tratamento de canal com tecnologia que permite, na maioria dos casos, sessão única. Conheça a endodontia da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/endodontia' },
};

export default function Endodontia() {
  return (
    <ServiceDetail
      title="Endodontia"
      icon="/images/icons/icon-endodontia.png"
      image="/images/services/endodontia-01.jpg"
      image2="/images/services/endodontia-02.jpg"
      intro="A endodontia é o tratamento de canal. Contamos com tecnologia que permite, na maioria dos casos, realizar o procedimento em sessão única."
      highlights={[
        'Tratamento de canal com tecnologia atualizada',
        'Possibilidade de conclusão em sessão única, conforme o caso',
        'Foco em preservar o dente natural sempre que possível',
        'Procedimento realizado com atenção ao conforto do paciente',
      ]}
      steps={[
        { title: 'Diagnóstico', description: 'Avaliação clínica e radiográfica do dente afetado.' },
        { title: 'Anestesia e Isolamento', description: 'Preparação para um procedimento confortável e seguro.' },
        { title: 'Tratamento do Canal', description: 'Remoção do tecido afetado e limpeza dos canais.' },
        { title: 'Restauração', description: 'Selamento e restauração do dente tratado.' },
      ]}
      indicatedFor={[
        'Dor de dente persistente',
        'Infecção ou inflamação na polpa dentária',
        'Dentes trincados ou com cáries profundas',
      ]}
    />
  );
}
