import Image from "next/image";

import { AppBadge } from "@/components/shared/app-badge";
import { Step } from "@/components/shared/step";

import feather from "@/assets/icons/feather.svg";
import feathedArrow from "@/assets/icons/feathed-arrow.svg";

export const HowWeWork = () => {
  return (
    <section className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
      <AppBadge label={"Procesul nostru"} icon={<Image src={feather} alt={"Feather"} />} className={"gap-1"} />
      <h3 className={"section-heading mt-2 text-center"}>Cum lucrăm</h3>

      <p className={"font-helvetica-neue max-w-md py-4 text-center text-sm leading-6 text-black/70 md:text-base"}>
        Descoperă pașii prin care transformăm ideile tale într-un website modern, sigur și pregătit de lansare.
      </p>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-4">
        <Step
          number="1"
          title="Strategie & Planificare"
          description="Definim obiectivele, funcționalitățile și pașii proiectului pentru o direcție eficientă."
        />

        <div className={"hidden h-full justify-center pt-6 lg:flex"}>
          <Image src={feathedArrow} alt={"Feathed arrow icon"} />
        </div>

        <Step
          number="2"
          title="Design & Dezvoltare"
          description="Creăm design modern și dezvoltăm tehnic soluția pentru un website rapid, sigur și scalabil."
        />

        <div className={"hidden h-full justify-center pt-6 lg:flex"}>
          <Image src={feathedArrow} alt={"Feathed arrow icon"} />
        </div>

        <Step
          number="3"
          title="Testare & Lansare"
          description="Testăm funcționalitatea și performanța, optimizăm detalii și lansăm proiectul în siguranță."
        />
      </div>
    </section>
  );
};
