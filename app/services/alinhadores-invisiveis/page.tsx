import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Alinhadores Invisíveis',
  description: 'Alinhadores invisíveis Invisalign para corrigir o alinhamento dos dentes de forma discreta e confortável. Conheça o tratamento da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/services/alinhadores-invisiveis' },
};

export default function AlinhadoresInvisiveis() {
  return (
    <ServiceDetail
      title="Alinhadores Invisíveis"
      icon="/images/icons/icon-alinhador-invisivel.png"
      image="/images/services/alinhadores-invisiveis-01.jpg"
      image2="/images/services/alinhadores-invisiveis-02.jpg"
      intro="Trabalhamos com Invisalign, um dos melhores alinhadores invisíveis disponíveis atualmente, para corrigir o alinhamento dos dentes de forma discreta e confortável."
      highlights={[
        'Alinhadores transparentes e removíveis, praticamente imperceptíveis',
        'Maior conforto no dia a dia em comparação a aparelhos fixos',
        'Facilidade para higienização durante o tratamento',
        'Planejamento digital do resultado final',
      ]}
      steps={[
        { title: 'Escaneamento Digital', description: 'Moldagem digital dos dentes, sem a necessidade de moldes tradicionais.' },
        { title: 'Planejamento do Sorriso', description: 'Simulação digital do resultado final do tratamento.' },
        { title: 'Uso dos Alinhadores', description: 'Troca periódica dos alinhadores conforme o planejamento.' },
        { title: 'Acompanhamento', description: 'Consultas de acompanhamento até alcançar o resultado esperado.' },
      ]}
      indicatedFor={[
        'Quem busca discrição durante o tratamento',
        'Desalinhamentos leves a moderados',
        'Adultos que preferem evitar o aparelho fixo tradicional',
      ]}
    />
  );
}
