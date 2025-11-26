import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { AboutUs } from "@/components/sections/about-us";
import { OurServices } from "@/components/sections/our-services";
import { Pricing } from "@/components/sections/pricing";
import { TechStack } from "@/components/sections/tech-stack";
import { Faq } from "@/components/sections/faq";

export const metadata = { title: "Acasă — Landing" };

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
