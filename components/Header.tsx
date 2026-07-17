import Link from 'next/link';

export default function Header({
  className = "transparent scroll-light",
  useHeaderInner = false
}: {
  className?: string;
  useHeaderInner?: boolean;
}) {
  const isLightHeader = className.includes('header-light');
  const rowClassName = useHeaderInner ? "de-flex sm-pt10 header-inner" : "de-flex sm-pt10";

  return (
    <header className={className} data-base-class={className}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={rowClassName}>
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link href="/">
                    <img className="logo-main logo" src="/images/logo-orto-up-white.png" alt="Orto Up" />
                    <img className="logo-scroll logo-2" src="/images/logo-orto-up-color.png" alt="Orto Up" />
                    <img className="logo-mobile" src={isLightHeader ? "/images/logo-orto-up-color.png" : "/images/logo-orto-up-white.png"} alt="Orto Up" />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainemenu begin */}
                <ul id="mainmenu">
                  <li><Link className="menu-item" href="/">Início</Link></li>
                  <li><Link className="menu-item" href="/sobre">Sobre Nós</Link></li>
                  <li>
                    <Link className="menu-item services-desktop-link" href="/servicos">Serviços</Link>
                    <button className="menu-item mobile-services-trigger" type="button" aria-expanded="false">Serviços</button>
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
                      <li><Link href="/servicos">Todos os Serviços</Link></li>
                    </ul>
                  </li>
                  <li><Link className="menu-item" href="/contato">Contato</Link></li>
                  <li className="mobile-menu-appointment">
                    <Link href="/agendamento">
                      <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
                      <span>Agendar consulta</span>
                    </Link>
                  </li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/agendamento" className="btn-main fx-slide"><span>Agendar Consulta</span></Link>
                  <button id="menu-btn" type="button" aria-label="Abrir menu" aria-expanded="false"></button>
                </div>

                <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
