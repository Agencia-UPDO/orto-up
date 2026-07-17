import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

const siteUrl = "https://www.ortoup.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/sobre`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/servicos`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contato`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/agendamento`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/termos-e-condicoes`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/servicos/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
