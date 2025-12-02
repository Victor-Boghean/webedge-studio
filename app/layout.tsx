import type { Metadata } from "next";

import { helvetica, helveticaNeue, openSans, sora } from "./fonts";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[sora.variable, openSans.variable, helvetica.variable, helveticaNeue.variable].join(" ")}
    >
      <body className={`font-open antialiased`}>{children}</body>
    </html>
  );
}
