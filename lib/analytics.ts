type LeadFormType = 'agendamento' | 'contato';

type DataLayerEvent = {
  event: string;
  form_type: LeadFormType;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function trackLead(formType: LeadFormType) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'generate_lead',
    form_type: formType,
  });
}
