import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/lib/services';
import PartnersCarousel from '@/components/PartnersCarousel';

export const metadata: Metadata = {
  title: { absolute: 'Orto Up — Reabilitação Oral | Clínica Odontológica em São José dos Pinhais' },
  description: 'Clínica odontológica em Afonso Pena, São José dos Pinhais - PR, com atendimento humanizado desde 2009. Implantes, ortodontia, alinhadores invisíveis e mais. Aceitamos planos de saúde.',
  alternates: { canonical: '/' },
};

export default function Home() {
  const yearsExperience = new Date().getFullYear() - 2009;

  return (
    <>
      <section id="section-intro" className="relative overflow-hidden" style={{ backgroundImage: 'url(/images/background/3.webp)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Bem-vindo à Orto Up</div>
              <h1 className="fs-84 fs-sm-10vw lh-1-1 wow fadeInUp" data-wow-delay=".2s">Consultório <span className="id-color">Odontológico</span> em São José dos Pinhais</h1>
              <div className="pe-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <p className="mb-4 pe-lg-5">Desde 2009 no Afonso Pena, São José dos Pinhais, unimos excelência técnica e atendimento humanizado para transformar sorrisos. Atendemos com planos de saúde.</p>
              </div>

              <div className="d-flex align-items-center pb-4 mb-4 c wow fadeInUp" data-wow-delay=".9s">
                <Link className="btn-main me-5 wow fadeInUp" data-wow-delay=".6s" href="/booking">Agendar Consulta</Link>
                <div className="d-flex align-items-center">
                  <div className="me-3 fs-14 d-rating">
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                    <i className="fa fa-solid fa-star"></i>
                  </div>
                  <div className="fw-600 fs-14 lh-1-5"><span className="fs-16 fw-bold">5,0</span> &middot; 41 avaliações no Google</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 sm-hide">
              <div className="relative wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: '30px' }}>
                <div className="rounded-1 overflow-hidden soft-shadow">
                  <img src="/images/fotos-clinica/sala-espera-orto-up-01.webp" className="w-100" alt="Sala de espera da Orto Up" />
                </div>
                <div className="bg-white shadow-1 abs p-3 rounded-1 z-2" style={{ left: '30px', bottom: '-30px' }}>
                  <div className="d-flex align-items-center">
                    <i className="fs-32 id-color icofont-medal me-3"></i>
                    <div>
                      <h4 className="mb-0 lh-1">{yearsExperience}+</h4>
                      <span className="fs-12">Anos de Experiência</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="text-center mb-4">
            <span className="fs-14 fw-600 op-6">Atendemos os principais convênios</span>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className=" rounded-1 overflow-hidden wow zoomIn">
                        <img src="/images/fotos-clinica/foto-clinica-orto-up-01.webp" className="w-100 wow scaleIn" alt="Cadeira odontológica da Orto Up" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-6">
                  <div className="row g-4">
                    <div className="spacer-single sm-hide"></div>

                    <div className="col-lg-12">
                      <div className=" rounded-1 overflow-hidden wow zoomIn" data-wow-delay=".3s">
                        <img src="/images/fotos-clinica/foto-clinica-orto-up-02.webp" className="w-100 wow scaleIn" alt="Cadeira odontológica da Orto Up" data-wow-delay=".3s" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="me-lg-3">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Sobre Nós</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Odontologia de Excelência desde 2009</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">Fundada pelo Dr. Marcelo Silva Araujo, a Orto Up nasceu do sonho de oferecer uma odontologia diferenciada, baseada em excelência técnica e atendimento humanizado — transformando sorrisos e devolvendo autoestima aos pacientes.</p>
                <ul className="ul-check text-dark cols-2 fw-600 mb-4 wow fadeInUp" data-wow-delay=".6s">
                  <li>Atendimento Humanizado</li>
                  <li>Aceitamos Planos de Saúde</li>
                  <li>Tecnologia Atualizada</li>
                  <li>Ambiente Moderno</li>
                </ul>

                <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".8s" href="/about"><span>Conheça Nossa História</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="row g-4 justify-content-center mb-4">
            <div className="col-lg-7 text-center">
              <div className="subtitle wow fadeInUp mb-3">Nossos Serviços</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Tratamentos para Cada Necessidade</h2>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.slug} className="col-lg-4 col-sm-6">
                <div className="hover">
                  <div className="h-100">
                    <img src={service.icon} className="w-70px mb-3 wow scaleIn" alt={`Ícone ${service.title}`} />
                    <div className="relative mt-4 wow fadeInUp">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <Link className="btn-plus" href={`/services/${service.slug}`}>
                        <i className="fa fa-plus"></i>
                        <span>Saiba mais</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-color-op-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Nossa Equipe</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Quem Cuida do Seu Sorriso</h2>
              <div className="spacer-single"></div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6">
              <div className="bg-white rounded-1 relative overflow-hidden">
                <div className="row g-0 align-items-center">
                  <div className="col-md-5">
                    <img src="/images/fotos-clinica/atendimento-dr-marcelo.webp" className="w-100 rounded" alt="Dr. Marcelo Silva Araujo" />
                  </div>
                  <div className="col-md-7">
                    <div className="h-100 p-40">
                      <h3 className="mb-0">Dr. Marcelo Silva Araujo</h3>
                      <p className="id-color mb-2">Prótese e Implante &middot; CRO 20264</p>
                      <p className="mb-0">Fundador da Orto Up, especialista em Implantodontia pelo ILAPEO e em Prótese Dentária pela Universidade Tuiuti do Paraná.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>
          <div className="spacer-double"></div>

          <div className="row g-4">
            <div className="col-md-3 col-sm-6 text-center">
              <div className="wow fadeInRight" data-wow-delay=".0s">
                <h3 className="fs-40 mb-0">{yearsExperience}+</h3>
                Anos de Experiência
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="wow fadeInRight" data-wow-delay=".2s">
                <h3 className="fs-40 mb-0">5,0</h3>
                Avaliação no Google
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="wow fadeInRight" data-wow-delay=".4s">
                <h3 className="fs-40 mb-0">41</h3>
                Avaliações de Pacientes
              </div>
            </div>
            <div className="col-md-3 col-sm-6 text-center">
              <div className="wow fadeInRight" data-wow-delay=".6s">
                <h3 className="fs-40 mb-0">2009</h3>
                Ano de Fundação
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5">
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Tudo o Que Você Precisa Saber</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Perguntas Frequentes</h2>
            </div>

            <div className="col-lg-7">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div className="accordion-section-title" data-tab="#accordion-a1">
                    Com que frequência devo visitar o dentista?
                  </div>
                  <div className="accordion-section-content" id="accordion-a1">É recomendado visitar seu dentista a cada 6 meses para uma consulta de rotina e limpeza, salvo orientação contrária.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a2">
                    A Orto Up atende por plano de saúde?
                  </div>
                  <div className="accordion-section-content" id="accordion-a2">
                    Sim, atendemos pacientes com planos de saúde. Entre em contato para confirmar a cobertura do seu convênio.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a3">
                    Onde fica a clínica?
                  </div>
                  <div className="accordion-section-content" id="accordion-a3">
                    Estamos na Rua Almirante Alexandrino, 2300, no bairro Afonso Pena, em São José dos Pinhais - PR.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a4">
                    Quais são os horários de atendimento?
                  </div>
                  <div className="accordion-section-content" id="accordion-a4">
                    Atendemos de segunda a sexta-feira, das 9h às 19h.
                  </div>
                  <div className="accordion-section-title" data-tab="#accordion-a5">
                    Clareamento dental é seguro?
                  </div>
                  <div className="accordion-section-content" id="accordion-a5">
                    Sim. Realizamos um clareamento personalizado para cada paciente, com acompanhamento profissional durante todo o processo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-op-1">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <div className="subtitle wow fadeInUp mb-3">Avaliação dos Pacientes</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Nota 5,0 no Google</h2>
              <div className="fs-24 d-rating my-3">
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
                <i className="fa fa-solid fa-star"></i>
              </div>
              <p className="wow fadeInUp">Com base em 41 avaliações de pacientes atendidos na Orto Up.</p>
              <Link className="btn-main fx-slide wow fadeInUp" href="https://www.google.com/search?q=Orto+Up+Reabilita%C3%A7%C3%A3o+Oral" target="_blank"><span>Ver Avaliações no Google</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
