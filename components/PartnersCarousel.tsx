import { convenios } from '@/lib/convenios';

export default function PartnersCarousel() {
  return (
    <div className="partners-row">
      {convenios.map((convenio) => (
        <div className="partners-row-item" key={convenio.name}>
          <img src={convenio.logo} alt={convenio.name} />
        </div>
      ))}
    </div>
  );
}
