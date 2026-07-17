import Link from 'next/link';
import type { Metadata } from 'next';
import PartnersCarousel from '@/components/PartnersCarousel';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história da Orto Up, fundada em 2009 pelo Dr. Marcelo Silva Araujo em Afonso Pena, São José dos Pinhais - PR. Missão, visão, valores e nossa equipe.',
  alternates: { canonical: '/sobre' },
};

export default function About() {
  return (
    <>
      <section id="subheader" className="bg-color-op-1 text-center">
        <div className="container relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="wow fadeInUp">Sobre Nós</h1>
              <div className="border-bottom my-3"></div>
              <ul className="crumb wow fadeInDown">
                <li><Link href="/">Início</Link></li>
                <li className="active">Sobre Nós</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className=" rounded-1 overflow-hidden wow zoomIn">
                        <img src="/images/fotos-clinica/consultorio-orto-up-01.webp" className="w-100 wow scaleIn" alt="Consultório da Orto Up" />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-6">
                  <div className="row g-4">
                    <div className="spacer-single sm-hide"></div>

                    <div className="col-lg-12">
                      <div className=" rounded-1 overflow-hidden wow zoomIn" data-wow-delay=".3s">
                        <img src="/images/fotos-clinica/recepcao-orto-up.webp" className="w-100 wow scaleIn" alt="Recepção da Orto Up" data-wow-delay=".3s" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="me-lg-3">
                <div className="subtitle s2 mb-3 wow fadeInUp" data-wow-delay=".0s">Nossa História</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Odontologia de Excelência desde 2009</h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Fundada em 2009 pelo Dr. Marcelo Silva Araujo, a Orto Up nasceu do sonho de oferecer uma odontologia diferenciada, baseada em excelência técnica e atendimento humanizado. Para o Dr. Marcelo, a saúde bucal sempre foi muito mais do que procedimentos: significa transformar sorrisos, devolver autoestima e proporcionar qualidade de vida aos pacientes.
                </p>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Ao longo dos anos, construímos um espaço acolhedor e moderno em Afonso Pena, São José dos Pinhais, comprometido com tratamentos de alta qualidade. Entre os principais marcos da nossa trajetória estão a expansão do número de atendimentos, a modernização da estrutura e a implementação de novas tecnologias — consolidando a Orto Up como referência em atendimento humanizado e excelência profissional na região.
                </p>

                <Link className="btn-main fx-slide wow fadeInUp" data-wow-delay=".8s" href="/agendamento"><span>Agendar Consulta</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-color-op-1 pt-80 pb-80">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="h-100 p-40 rounded-1 bg-white">
                <i className="fs-40 icofont-flag id-color mb-3 d-block"></i>
                <h4>Missão</h4>
                <p className="mb-0">Promover saúde bucal por meio de uma odontologia humanizada e de excelência no atendimento.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-40 rounded-1 bg-white">
                <i className="fs-40 icofont-eye-alt id-color mb-3 d-block"></i>
                <h4>Visão</h4>
                <p className="mb-0">Ser referência em odontologia pela excelência no atendimento, inovação tecnológica e compromisso com a saúde e satisfação dos pacientes.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="h-100 p-40 rounded-1 bg-white">
                <i className="fs-40 icofont-heart-alt id-color mb-3 d-block"></i>
                <h4>Valores</h4>
                <p className="mb-0">Atendimento humanizado e individualizado, com compromisso verdadeiro com cada paciente.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Por Que Escolher a Orto Up</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Compromisso Verdadeiro com Cada Paciente</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">O que nos diferencia é o compromisso com resultados estéticos e funcionais, aliado a um atendimento próximo e individualizado em cada etapa do tratamento.</p>

              <div className="border-bottom mb-4"></div>

              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="h-100">
                    <div className="relative wow fadeInUp">
                      <h5>Atendimento Humanizado</h5>
                      <p className="mb-0">Cuidado individualizado, com atenção real às necessidades de cada paciente.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100">
                    <div className="relative wow fadeInUp">
                      <h5>Aceitamos Planos de Saúde</h5>
                      <p className="mb-0">Facilitamos o acesso ao tratamento odontológico para nossos pacientes.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100">
                    <div className="relative wow fadeInUp">
                      <h5>Tecnologia Atualizada</h5>
                      <p className="mb-0">Contamos com raio-x periapical digital e técnicas modernas de tratamento.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="h-100">
                    <div className="relative wow fadeInUp">
                      <h5>Ambiente Moderno</h5>
                      <p className="mb-0">Espaço acolhedor e agradável, pensado para o conforto do paciente.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-6 text-end">
                  <div className="w-80 rounded-1 overflow-hidden mb-25 wow zoomIn d-inline-block">
                    <img src="/images/fotos-clinica/sala-espera-orto-up-01.webp" className="w-100 wow scaleIn" alt="Sala de espera da Orto Up" />
                  </div>
                  <div className="w-100 rounded-1 overflow-hidden mb-25 wow zoomIn d-inline-block">
                    <img src="/images/fotos-clinica/sala-espera-orto-up-02.webp" className="w-100 wow scaleIn" alt="Sala de espera da Orto Up" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="w-100 rounded-1 overflow-hidden mb-25 wow zoomIn d-inline-block">
                    <img src="/images/fotos-clinica/foto-clinica-orto-up-01.webp" className="w-100 wow scaleIn" alt="Cadeira odontológica da Orto Up" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-light pt-80 pb-80">
        <div className="container">
          <div className="text-center mb-4">
            <div className="subtitle wow fadeInUp mb-3">Convênios</div>
            <h2 className="wow fadeInUp" data-wow-delay=".2s">Atendemos os Principais Planos de Saúde</h2>
          </div>
          <PartnersCarousel />
        </div>
      </section>

      <section id="equipe" className="team-profile-section pt-80 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="subtitle wow fadeInUp mb-3">Nossa Equipe</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">Conheça o Dr. Marcelo</h2>
              <p className="team-profile-heading-text wow fadeInUp" data-wow-delay=".3s">
                Experiência, precisão e cuidado humano em cada etapa do seu tratamento.
              </p>
              <div className="spacer-single"></div>
            </div>
          </div>

          <div className="team-profile-card wow fadeInUp" data-wow-delay=".35s">
            <div className="row g-0 align-items-stretch">
              <div className="col-lg-5">
                <div className="team-profile-photo-wrap">
                  <img
                    src="/images/fotos-clinica/atendimento-dr-marcelo.webp"
                    className="team-profile-photo"
                    alt="Dr. Marcelo Silva Araujo durante atendimento odontológico"
                  />
                  <div className="team-profile-badge">
                    <span>Fundador da Orto Up</span>
                    <strong>Desde 2009</strong>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="team-profile-content">
                  <div className="team-profile-eyebrow">Quem cuida do seu sorriso</div>
                  <h3>Dr. Marcelo Silva Araujo</h3>
                  <p className="team-profile-specialty">Prótese e Implante <span>&middot;</span> CRO 20264</p>

                  <p className="team-profile-intro">
                    Cirurgião-dentista formado pela PUCPR, o Dr. Marcelo fundou a Orto Up com o propósito de unir excelência técnica, planejamento cuidadoso e um atendimento verdadeiramente próximo.
                  </p>

                  <div className="team-credentials" aria-label="Formação e especializações">
                    <div className="team-credential">
                      <i className="icofont-certificate-alt-1" aria-hidden="true"></i>
                      <div>
                        <span>Formação</span>
                        <strong>Odontologia — PUCPR, 2008</strong>
                      </div>
                    </div>
                    <div className="team-credential">
                      <i className="icofont-tooth" aria-hidden="true"></i>
                      <div>
                        <span>Especialização</span>
                        <strong>Implantodontia — ILAPEO</strong>
                      </div>
                    </div>
                    <div className="team-credential">
                      <i className="icofont-medical-sign-alt" aria-hidden="true"></i>
                      <div>
                        <span>Especialização</span>
                        <strong>Prótese Dentária — UTP</strong>
                      </div>
                    </div>
                    <div className="team-credential">
                      <i className="icofont-badge" aria-hidden="true"></i>
                      <div>
                        <span>Registro profissional</span>
                        <strong>CRO 20264</strong>
                      </div>
                    </div>
                  </div>

                  <Link className="btn-main fx-slide" href="/agendamento">
                    <span>Agendar com Dr. Marcelo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
