import { notFound, permanentRedirect } from 'next/navigation';
import { services } from '@/lib/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function LegacyServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!services.some((service) => service.slug === slug)) {
    notFound();
  }

  permanentRedirect(`/servicos/${slug}`);
}
