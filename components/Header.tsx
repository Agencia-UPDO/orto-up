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
                  <li><Link className="menu-item" href="/about">Sobre Nós</Link></li>
                  <li>
                    <Link className="menu-item" href="/services">Serviços</Link>
                    <ul>
                      <li><Link href="/services/implantes-dentarios">Implantes Dentários</Link></li>
                      <li><Link href="/services/ortodontia">Ortodontia</Link></li>
                      <li><Link href="/services/alinhadores-invisiveis">Alinhadores Invisíveis</Link></li>
                      <li><Link href="/services/clareamento-dental">Clareamento Dental</Link></li>
                      <li><Link href="/services/lentes-de-contato-dental">Lentes de Contato Dental</Link></li>
                      <li><Link href="/services/endodontia">Endodontia</Link></li>
                      <li><Link href="/services/protese-dentaria">Prótese Dentária</Link></li>
                      <li><Link href="/services/cirurgia-oral">Cirurgia Oral</Link></li>
                      <li><Link href="/services/clinica-geral">Clínica Geral</Link></li>
                      <li><Link href="/services">Todos os Serviços</Link></li>
                    </ul>
                  </li>
                  <li><Link className="menu-item" href="/contact">Contato</Link></li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/booking" className="btn-main fx-slide"><span>Agendar Consulta</span></Link>
                  <span id="menu-btn"></span>
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
