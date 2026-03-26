import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://devin-portfolio-git-main-devingupta1s-projects.vercel.app";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/work`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/writing`, lastModified: new Date() },
  ];
}
