import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <Link href="/" aria-label="Ir para a página inicial">
              <img src="/images/logo-orto-up-white.png" className="logo-footer" alt="Orto Up" />
            </Link>
            <div className="spacer-20"></div>
            <p>Desde 2009, a Orto Up une excelência técnica e atendimento humanizado para transformar sorrisos e devolver autoestima e qualidade de vida aos nossos pacientes.</p>

            <div className="social-icons mb-sm-30">
              <Link href="https://instagram.com/ortoup_reabilitacao_oral" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
              <Link href="https://wa.me/5541998497676" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Empresa</h5>
                  <ul>
                    <li><Link href="/">Início</Link></li>
                    <li><Link href="/sobre">Sobre Nós</Link></li>
                    <li><Link href="/servicos">Nossos Serviços</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                    <li><Link href="/agendamento">Agendar Consulta</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Nossos Serviços</h5>
                  <ul>
                    <li><Link href="/servicos/implantes-dentarios">Implantes Dentários</Link></li>
                    <li><Link href="/servicos/ortodontia">Ortodontia</Link></li>
                    <li><Link href="/servicos/alinhadores-invisiveis">Alinhadores Invisíveis</Link></li>
                    <li><Link href="/servicos/clareamento-dental">Clareamento Dental</Link></li>
                    <li><Link href="/servicos/lentes-de-contato-dental">Lentes de Contato Dental</Link></li>
                    <li><Link href="/servicos/endodontia">Endodontia</Link></li>
                    <li><Link href="/servicos/protese-dentaria">Prótese Dentária</Link></li>
                    <li><Link href="/servicos/cirurgia-oral">Cirurgia Oral</Link></li>
                    <li><Link href="/servicos/clinica-geral">Clínica Geral</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <h5>Fale Conosco</h5>
              <div className="fw-bold text-white"><i className="icofont-location-pin me-2 id-color"></i>Localização</div>
              Rua Almirante Alexandrino, 2300 - Afonso Pena, São José dos Pinhais - PR, 83045-210

              <div className="spacer-20"></div>

              <div className="fw-bold text-white"><i className="icofont-phone me-2 id-color"></i>Telefone / WhatsApp</div>
              (41) 99849-7676

              <div className="spacer-20"></div>

              <div className="fw-bold text-white"><i className="icofont-envelope me-2 id-color"></i>Envie uma Mensagem</div>
              ortoup@ortoup.com.br

              <div className="spacer-20"></div>

              <div className="fw-bold text-white"><i className="icofont-clock-time me-2 id-color"></i>Horário</div>
              Segunda a Sexta, 09h às 19h
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright {new Date().getFullYear()} - Orto Up Clínica Odontológica &middot; CNPJ 11.213.984/0001-05 &middot; CRO Clínica 1856
                </div>
                <ul className="menu-simple">
                  <li><Link href="/termos-e-condicoes">Termos &amp; Condições</Link></li>
                  <li><Link href="/politica-de-privacidade">Política de Privacidade</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
