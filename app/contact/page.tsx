import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale com a Orto Up: Rua Almirante Alexandrino, 2300, Afonso Pena, São José dos Pinhais - PR. Telefone/WhatsApp (41) 99849-7676. Segunda a sexta, 9h às 19h.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <section id="subheader" className="bg-color-op-1 text-center">
        <div className="container relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="wow fadeInUp">Fale Conosco</h1>
              <div className="border-bottom my-3"></div>
              <ul className="crumb wow fadeInDown">
                <li><Link href="/">Início</Link></li>
                <li className="active">Contato</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="subtitle">Fale Conosco</div>
              <h2 className="wow fadeInUp">Estamos sempre prontos para ajudar você e responder suas dúvidas</h2>

              <p>Seja uma dúvida, uma sugestão, ou para agendar sua consulta, este é o lugar certo. Preencha o formulário abaixo com seus dados e sua mensagem, e retornaremos o mais breve possível. Atendemos também por WhatsApp e aceitamos planos de saúde.</p>

              <div className="row g-4 gx-5">
                <div className="col-lg-6">
                  <div className="fw-bold text-dark"><i className="icofont-clock-time me-2 id-color-2"></i>Estamos Abertos</div>
                  Segunda a Sexta, 09h às 19h
                </div>

                <div className="col-lg-6">
                  <div className="fw-bold text-dark"><i className="icofont-location-pin me-2 id-color-2"></i>Localização</div>
                  Rua Almirante Alexandrino, 2300 - Afonso Pena, São José dos Pinhais - PR, 83045-210
                </div>

                <div className="col-lg-6">
                  <div className="fw-bold text-dark"><i className="icofont-phone me-2 id-color-2"></i>Telefone / WhatsApp</div>
                  <Link href="https://wa.me/5541998497676" target="_blank">(41) 99849-7676</Link>
                </div>

                <div className="col-lg-6">
                  <div className="fw-bold text-dark"><i className="icofont-envelope me-2 id-color-2"></i>Envie uma Mensagem</div>
                  ortoup@ortoup.com.br
                </div>
              </div>

            </div>

            <div className="col-lg-6">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <MapEmbed
                src="https://www.google.com/maps?q=Rua+Almirante+Alexandrino+2300+Afonso+Pena+S%C3%A3o+Jos%C3%A9+dos+Pinhais+PR&output=embed"
                title="Localização da Orto Up"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
