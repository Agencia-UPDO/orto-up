import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import Preloader from "@/components/Preloader";
import Footer from "@/components/Footer";
import ScriptHandler from "@/components/ScriptHandler";

const siteUrl = "https://www.ortoup.com.br";
const siteName = "Orto Up Clínica Odontológica";
const defaultDescription =
  "Clínica odontológica em Afonso Pena, São José dos Pinhais - PR. Implantes, ortodontia, alinhadores invisíveis e mais, com atendimento humanizado desde 2009. Aceitamos planos de saúde.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Orto Up — Reabilitação Oral | Clínica Odontológica em São José dos Pinhais",
    template: "%s | Orto Up",
  },
  description: defaultDescription,
  keywords: [
    "clínica odontológica São José dos Pinhais",
    "dentista Afonso Pena",
    "implante dentário",
    "ortodontia",
    "alinhador invisível",
    "clareamento dental",
    "Orto Up",
  ],
  authors: [{ name: "Orto Up Clínica Odontológica" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: "Orto Up — Reabilitação Oral",
    description: defaultDescription,
    images: [
      {
        url: "/images/fotos-clinica/sala-espera-orto-up-01.webp",
        width: 679,
        height: 509,
        alt: "Clínica Orto Up em São José dos Pinhais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orto Up — Reabilitação Oral",
    description: defaultDescription,
    images: ["/images/fotos-clinica/sala-espera-orto-up-01.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#684286",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: siteName,
  alternateName: "Orto Up",
  description: defaultDescription,
  url: siteUrl,
  telephone: "+5541998497676",
  email: "ortoup@ortoup.com.br",
  image: `${siteUrl}/images/fotos-clinica/sala-espera-orto-up-01.webp`,
  logo: `${siteUrl}/images/logo-orto-up-color.png`,
  priceRange: "$$",
  foundingDate: "2009",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Almirante Alexandrino, 2300",
    addressLocality: "São José dos Pinhais",
    addressRegion: "PR",
    postalCode: "83045-210",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/ortoup_reabilitacao_oral",
    "https://wa.me/5541998497676",
  ],
  medicalSpecialty: [
    "Implantodontia",
    "Ortodontia",
    "Odontologia Estética",
    "Endodontia",
    "Prótese Dentária",
    "Cirurgia Oral",
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Marcelo Silva Araujo",
    jobTitle: "Cirurgião-Dentista",
    honorificSuffix: "CRO 20264",
  },
  acceptsReservations: true,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "41",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScriptHandler />
        <div id="wrapper">
          <a href="#" id="back-to-top"></a>

          {/* preloader begin */}
          <Preloader />
          {/* preloader end */}

          <HeaderWrapper />
          
          {/* content begin */}
          <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            {children}
          </div>
          {/* content end */}

          <Footer />
        </div>
        
        {/* overlay content begin */}
        <div id="extra-wrap" className="text-light">
            <div id="btn-close">
                <span></span>
                <span></span>
            </div>

            <div id="extra-content">
                <img src="/images/logo-orto-up-white.png" className="w-150px" alt="Orto Up" />

                <div className="spacer-30-line"></div>

                <h5>Nossos Serviços</h5>
                <ul className="ul-check">
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

                <div className="spacer-30-line"></div>

                <h5>Fale Conosco</h5>
                <div><i className="icofont-clock-time me-2 op-5"></i>Segunda a Sexta, 09h às 19h</div>
                <div><i className="icofont-location-pin me-2 op-5"></i>Rua Almirante Alexandrino, 2300 - Afonso Pena, São José dos Pinhais - PR</div>
                <div><i className="icofont-envelope me-2 op-5"></i>ortoup@ortoup.com.br</div>

                <div className="spacer-30-line"></div>

                <h5>Sobre Nós</h5>
                <p>Desde 2009, a Orto Up une excelência técnica e atendimento humanizado para transformar sorrisos e devolver autoestima e qualidade de vida aos nossos pacientes.</p>

                <div className="social-icons">
                    <Link href="https://instagram.com/ortoup_reabilitacao_oral" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="https://wa.me/5541998497676" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                </div>
            </div>
        </div>
        
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/on3step.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
