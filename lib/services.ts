export type Service = {
  slug: string;
  title: string;
  icon: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: 'implantes-dentarios',
    title: 'Implantes Dentários',
    icon: '/images/icons/icon-implantes.png',
    description: 'Tecnologia de implante sem corte, com cirurgia guiada por meio de um guia cirúrgico personalizado.',
  },
  {
    slug: 'ortodontia',
    title: 'Ortodontia',
    icon: '/images/icons/icon-ortodontia.png',
    description: 'Trabalhamos com vários tipos de aparelho, incluindo o autoligado, que dispensa borrachinhas e acelera o tratamento.',
  },
  {
    slug: 'alinhadores-invisiveis',
    title: 'Alinhadores Invisíveis',
    icon: '/images/icons/icon-alinhador-invisivel.png',
    description: 'Trabalhamos com Invisalign, um dos melhores alinhadores invisíveis disponíveis atualmente.',
  },
  {
    slug: 'clareamento-dental',
    title: 'Clareamento Dental',
    icon: '/images/icons/icon-dente-brilhando.png',
    description: 'Clareamento dental personalizado para cada paciente, respeitando a sensibilidade e o resultado desejado.',
  },
  {
    slug: 'lentes-de-contato-dental',
    title: 'Lentes de Contato Dental',
    icon: '/images/icons/icon-lente-contato.png',
    description: 'Lentes de contato dental em porcelana e resina, para transformar a estética do seu sorriso.',
  },
  {
    slug: 'endodontia',
    title: 'Endodontia',
    icon: '/images/icons/icon-endodontia.png',
    description: 'Tratamento de canal com tecnologia que permite a realização em sessão única.',
  },
  {
    slug: 'protese-dentaria',
    title: 'Prótese Dentária',
    icon: '/images/icons/icon-protese.png',
    description: 'Próteses fixas e removíveis para restaurar a função e a estética de dentes ausentes.',
  },
  {
    slug: 'cirurgia-oral',
    title: 'Cirurgia Oral',
    icon: '/images/icons/icon-dentes-saudaveis.png',
    description: 'Procedimentos cirúrgicos realizados com segurança, técnica apurada e foco no conforto do paciente.',
  },
  {
    slug: 'clinica-geral',
    title: 'Clínica Geral',
    icon: '/images/icons/icon-limpeza-de-dente.png',
    description: 'Exames, limpezas e restaurações de rotina, a base de uma boa saúde bucal.',
  },
];
