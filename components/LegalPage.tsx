import Link from 'next/link';
import type { ReactNode } from 'react';

type SectionLink = {
  id: string;
  label: string;
};

type LegalPageProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: SectionLink[];
  children: ReactNode;
};

export default function LegalPage({ title, description, updatedAt, sections, children }: LegalPageProps) {
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
                <li className="active">{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            <aside className="col-lg-4 col-xl-3">
              <nav className="legal-summary" aria-label={`Índice de ${title}`}>
                <h2>Nesta página</h2>
                <ol>
                  {sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="col-lg-8 col-xl-9">
              <div className="legal-content">
                <p className="legal-intro">{description}</p>
                {children}
                <p className="small text-muted mt-5 mb-0">
                  Última atualização: <time dateTime="2026-07-17">{updatedAt}</time>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
