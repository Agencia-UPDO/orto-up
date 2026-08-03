import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Ortodontia',
  description: 'Aparelhos ortodônticos, incluindo o autoligado sem borrachinhas, para alinhar os dentes e corrigir a mordida. Tratamento ortodôntico da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/ortodontia' },
};

export default function Ortodontia() {
  return (
    <ServiceDetail
      title="Ortodontia"
      icon="/images/icons/icon-ortodontia.png"
      image="/images/services/ortodontia-01.jpg"
      image2="/images/services/ortodontia-02.jpg"
      intro="O aparelho fixo autoligado utiliza um sistema moderno que dispensa as tradicionais “borrachinhas”, permitindo um deslizamento mais eficiente dos fios ortodônticos. Isso proporciona mais conforto, menos atrito, mais facilidade na higienização e, em muitos casos, um tratamento mais rápido e confortável para o paciente."
      highlights={[
        'Aparelho autoligado, sem borrachinhas, com menos atrito e mais conforto',
        'Alinhamento dos dentes e correção da mordida',
        'Acompanhamento próximo ao longo de todo o tratamento',
        'Planejamento adequado para cada tipo de caso',
      ]}
      steps={[
        { title: 'Avaliação Inicial', description: 'Exame clínico para definir o tipo de aparelho mais indicado para o seu caso.' },
        { title: 'Instalação do Aparelho', description: 'Colocação do aparelho escolhido, incluindo a opção autoligada.' },
        { title: 'Acompanhamento', description: 'Consultas periódicas para ajustes ao longo do tratamento.' },
        { title: 'Contenção', description: 'Uso de contenção após a remoção do aparelho para manter o resultado.' },
      ]}
      indicatedFor={[
        'Dentes desalinhados ou tortos',
        'Problemas de mordida, como mordida aberta, cruzada ou profunda',
        'Crianças, adolescentes e adultos',
      ]}
    />
  );
}
