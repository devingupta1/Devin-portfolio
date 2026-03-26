import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://devin-portfolio-git-main-devingupta1s-projects.vercel.app"}/sitemap.xml`,
  };
}
