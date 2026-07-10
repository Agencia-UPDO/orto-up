import Link from 'next/link';
import type { Metadata } from 'next';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Nossos Serviços',
  description: 'Implantes dentários, ortodontia, alinhadores invisíveis, clareamento, lentes de contato dental, endodontia, prótese, cirurgia oral e clínica geral. Conheça os serviços da Orto Up.',
  alternates: { canonical: '/services' },
};

export default function Services() {
  return (
    <>
      <section id="subheader" className="bg-color-op-1 text-center">
        <div className="container relative z-2">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="wow fadeInUp">Nossos Serviços</h1>
              <div className="border-bottom my-3"></div>
              <ul className="crumb wow fadeInDown">
                <li><Link href="/">Início</Link></li>
                <li className="active">Nossos Serviços</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <p className="wow fadeInUp">Atendemos com planos de saúde e oferecemos um cuidado odontológico completo, do check-up de rotina a tratamentos especializados, sempre com atendimento humanizado.</p>
            </div>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div key={service.slug} className="col-lg-4 col-md-6">
                <div className="hover">
                  <div className="bg-color-op-1 h-100 p-40 rounded-1">
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
    </>
  );
}
