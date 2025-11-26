import { Sora, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

// Google Fonts
export const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

// Local Fonts (Helvetica și Helvetica Neue)
export const helvetica = localFont({
  src: [
    {
      path: "../styles/fonts/helvetica/Helvetica.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/helvetica/Helvetica-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const helveticaNeue = localFont({
  src: [
    {
      path: "../styles/fonts/helvetica-neue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/helvetica-neue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/helvetica-neue/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});
