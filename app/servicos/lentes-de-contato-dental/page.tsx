import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Lentes de Contato Dental',
  description: 'Lentes de contato dental em porcelana e resina para transformar a estética do seu sorriso. Conheça o tratamento da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/lentes-de-contato-dental' },
};

export default function LentesDeContatoDental() {
  return (
    <ServiceDetail
      title="Lentes de Contato Dental"
      icon="/images/icons/icon-lente-contato.png"
      image="/images/services/lente-de-contato-dental-01.jpg"
      image2="/images/services/lente-de-contato-dental-02.jpg"
      intro="Realizamos lentes de contato dental em porcelana e em resina, indicadas para transformar a estética do sorriso preservando ao máximo a estrutura do dente."
      highlights={[
        'Opções em porcelana e em resina, de acordo com cada caso',
        'Correção de cor, forma e pequenas imperfeições dos dentes',
        'Planejamento estético individualizado',
        'Aparência natural e harmônica',
      ]}
      steps={[
        { title: 'Planejamento do Sorriso', description: 'Definição de forma, cor e proporção ideais para o seu sorriso.' },
        { title: 'Preparo do Dente', description: 'Desgaste mínimo ou ausente, conforme a indicação de cada caso.' },
        { title: 'Moldagem e Confecção', description: 'Lentes feitas sob medida, em porcelana ou resina.' },
        { title: 'Cimentação', description: 'Fixação definitiva das lentes, com ajuste fino do resultado.' },
      ]}
      indicatedFor={[
        'Dentes com pequenas imperfeições, manchas ou desgaste',
        'Quem busca uniformizar a forma e a cor do sorriso',
        'Pacientes que querem mudar a estética com um procedimento pouco invasivo',
      ]}
    />
  );
}
