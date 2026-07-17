import type { Metadata } from 'next';
import ServiceDetail from '@/components/ServiceDetail';

export const metadata: Metadata = {
  title: 'Clareamento Dental',
  description: 'Clareamento dental personalizado para cada paciente, com acompanhamento profissional. Conheça o tratamento de clareamento da Orto Up em São José dos Pinhais.',
  alternates: { canonical: '/servicos/clareamento-dental' },
};

export default function ClareamentoDental() {
  return (
    <ServiceDetail
      title="Clareamento Dental"
      icon="/images/icons/icon-dente-brilhando.png"
      image="/images/services/clareamento-dental-01.jpg"
      image2="/images/services/clareamento-dental-02.jpg"
      intro="Realizamos clareamento dental personalizado para cada paciente, respeitando a sensibilidade individual e o resultado desejado."
      highlights={[
        'Avaliação individual antes de iniciar o tratamento',
        'Protocolo personalizado de acordo com cada caso',
        'Acompanhamento profissional durante todo o processo',
        'Resultado mais claro e uniforme, com segurança',
      ]}
      steps={[
        { title: 'Avaliação', description: 'Análise da cor atual dos dentes e da sensibilidade do paciente.' },
        { title: 'Protocolo Personalizado', description: 'Definição da técnica e do produto mais indicado para o seu caso.' },
        { title: 'Aplicação', description: 'Clareamento realizado em consultório, com acompanhamento profissional.' },
        { title: 'Manutenção', description: 'Orientações para prolongar o resultado alcançado.' },
      ]}
      indicatedFor={[
        'Dentes amarelados ou manchados',
        'Quem busca um resultado rápido e seguro',
        'Pacientes avaliados previamente em consulta',
      ]}
    />
  );
}
