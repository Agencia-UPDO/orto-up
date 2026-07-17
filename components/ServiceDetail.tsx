import Link from 'next/link';

type Step = {
  title: string;
  description: string;
};

export default function ServiceDetail({
  title,
  icon,
  intro,
  highlights,
  image,
  image2,
  steps,
  indicatedFor,
}: {
  title: string;
  icon: string;
  intro: string;
  highlights: string[];
  image: string;
  image2?: string;
  steps?: Step[];
  indicatedFor?: string[];
}) {
  return (
    <>
      <section id="subheader" className="bg-color-op-1 text-center">
        <div className="container relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="wow fadeInUp">{title}</h1>
              <div className="border-bottom my-3"></div>
              <ul className="crumb wow fadeInDown">
                <li><Link href="/">Início</Link></li>
                <li><Link href="/servicos">Serviços</Link></li>
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              {image2 ? (
                <div className="relative">
                  <div className="w-100 pe-5 pb-5 wow scaleIn">
                    <img src={image} className="w-100 rounded-1" alt={title} />
                  </div>
                  <img src={image2} className="w-40 rounded-1 abs end-0 bottom-0 z-2 soft-shadow wow scaleIn" data-wow-delay=".2s" alt={title} />
                </div>
              ) : (
                <div className="relative rounded-1 overflow-hidden wow zoomIn">
                  <img src={image} className="w-100 wow scaleIn" alt={title} />
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-3">
                <img src={icon} className="w-70px mb-3" alt={`Ícone ${title}`} />
                <h2 className="wow fadeInUp" data-wow-delay=".2s">{title}</h2>
                <p className="mb-0 wow fadeInUp" data-wow-delay=".4s">{intro}</p>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2">
              <ul className="ul-check text-dark fs-500">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {steps && steps.length > 0 && (
        <section className="bg-color-op-1 pt-80 pb-80">
          <div className="container">
            <div className="row g-4 justify-content-center mb-4">
              <div className="col-lg-7 text-center">
                <div className="subtitle id-color wow fadeInUp mb-3">Passo a Passo</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Como Funciona o Tratamento</h2>
              </div>
            </div>

            <div className="row g-4">
              {steps.map((step, index) => (
                <div className="col-lg-3 col-md-6" key={step.title}>
                  <div className="h-100 p-40 rounded-1 bg-white">
                    <div className="d-flex align-items-center justify-content-center rounded-circle bg-color text-light fw-bold mb-3" style={{ width: 44, height: 44 }}>
                      {index + 1}
                    </div>
                    <h5>{step.title}</h5>
                    <p className="mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {indicatedFor && indicatedFor.length > 0 && (
        <section className="service-indicated-section">
          <div className="container">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-5">
                <div className="subtitle id-color wow fadeInUp" data-wow-delay=".0s">Para Quem É Indicado</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">Esse Tratamento Pode Ser Para Você</h2>
              </div>
              <div className="col-lg-7">
                <ul className="ul-check text-dark fs-500">
                  {indicatedFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Pronto para Agendar sua Consulta?</h3>
              <p className="mb-0">Fale conosco hoje mesmo e dê o primeiro passo rumo a um sorriso mais saudável. Atendemos com planos de saúde.</p>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href="/agendamento"><span>Agendar Consulta</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
