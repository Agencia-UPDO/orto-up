import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Prótese Dentária',
  description: 'Próteses dentárias fixas e removíveis para restaurar a função e a estética de dentes ausentes. Conheça o tratamento da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/protese-dentaria' },
};

export default function ProteseDentaria() {
  return (
    <ServiceDetail
      title="Prótese Dentária"
      icon="/images/icons/icon-protese.png"
      image="/images/services/protese-dentaria-01.jpg"
      image2="/images/services/protese-dentaria-02.jpg"
      intro="Oferecemos próteses dentárias fixas e removíveis para restaurar a função mastigatória e a estética de dentes ausentes, devolvendo conforto e confiança ao sorriso."
      highlights={[
        'Próteses fixas e removíveis, conforme a indicação de cada caso',
        'Planejamento individualizado para função e estética',
        'Restauração de um ou mais dentes ausentes',
        'Acompanhamento durante todo o processo de adaptação',
      ]}
      steps={[
        { title: 'Avaliação', description: 'Definição do tipo de prótese mais indicado para o seu caso.' },
        { title: 'Moldagem', description: 'Registro preciso da arcada dentária para a confecção da prótese.' },
        { title: 'Confecção', description: 'Prótese feita sob medida, com atenção à função e à estética.' },
        { title: 'Ajuste e Instalação', description: 'Prova, ajustes finos e entrega da prótese.' },
      ]}
      indicatedFor={[
        'Perda de um ou vários dentes',
        'Quem busca recuperar a função mastigatória e a estética do sorriso',
        'Pacientes que preferem soluções fixas ou removíveis',
      ]}
    />
  );
}
