import { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AboutUs } from "@/components/sections/about-us";
import { OurServices } from "@/components/sections/our-services";
import { Pricing } from "@/components/sections/pricing";
import { TechStack } from "@/components/sections/tech-stack";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "WebEdge Studio — Soluții Web Moderne pentru Afaceri",
  description:
    "WebEdge Studio creează website-uri rapide, moderne și sigure pentru afaceri locale. Oferim servicii de dezvoltare web, design UI/UX, branding, SEO și optimizare pentru creștere.",
  keywords: [
    "web design",
    "dezvoltare web",
    "website Moldova",
    "creare site",
    "landing page",
    "WebEdge Studio",
    "site de prezentare",
    "ecommerce",
    "SEO",
    "optimizare site",
    "agenție web",
    "servicii web",
    "design UI UX",
  ],
  authors: [{ name: "WebEdge Studio" }],
  creator: "WebEdge Studio",
  publisher: "WebEdge Studio",
  openGraph: {
    title: "WebEdge Studio — Soluții Web Moderne pentru Afaceri",
    description:
      "Construim website-uri premium, rapide și optimizate, adaptate nevoilor afacerii tale. Soluții digitale complete: web design, dezvoltare, branding, SEO.",
    url: "https://webedge.md",
    siteName: "WebEdge Studio",
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebEdge Studio — Soluții Web Moderne pentru Afaceri",
    description:
      "Website-uri rapide, sigure și moderne. Soluții complete pentru afaceri: web design, dezvoltare, branding, SEO.",
  },
};

export default function LandingPage() {
  return (
    <>
      <Hero />
      <OurServices />
      <AboutUs />
      <WhyChooseUs />
      <TechStack />
      <HowWeWork />
      <Pricing />
      <Faq />
    </>
  );
}
