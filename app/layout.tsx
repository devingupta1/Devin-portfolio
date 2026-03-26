import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/ui/Nav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageTransition } from "@/components/ui/PageTransition";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://devin-portfolio-git-main-devingupta1s-projects.vercel.app";

export const metadata: Metadata = {
  title: "Devin Gupta — Systems & AI Engineer",
  description:
    "CS junior at University of Utah building distributed systems and agentic AI. Hackathon winner. Open to internships.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Devin Gupta — Systems & AI Engineer",
    description:
      "CS junior at University of Utah building distributed systems and agentic AI.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devin Gupta — Systems & AI Engineer",
    description:
      "CS junior at University of Utah building distributed systems and agentic AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <Nav />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
