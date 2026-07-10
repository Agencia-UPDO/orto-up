import { convenios } from '@/lib/convenios';

export default function PartnersCarousel() {
  return (
    <div className="partners-marquee">
      <div className="partners-marquee-track">
        {[...convenios, ...convenios].map((convenio, i) => (
          <div className="partners-marquee-item" key={`${convenio.name}-${i}`}>
            <img src={convenio.logo} alt={convenio.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
