import Image from "next/image";

import { AppBadge } from "@/components/shared/app-badge";

import { FAQItem } from "@/components/shared/faq-item";
import faqIcon from "@/assets/icons/faq.svg";
import timeIcon from "@/assets/icons/time-icon.svg";
import squareIcon from "@/assets/icons/square-icon.svg";
import domainIcon from "@/assets/icons/domain-icon.svg";
import editIcon from "@/assets/icons/edit-icon.svg";
import markerIcon from "@/assets/icons/marker-icon.svg";
import refreshIcon from "@/assets/icons/refresh-icon.svg";
import optimizationIcon from "@/assets/icons/optimization-icon.svg";

export const Faq = () => {
  return (
    <section className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
      <AppBadge label={"FAQs"} icon={<Image src={faqIcon} alt={"Check"} />} className={"gap-1"} />
      <h3 className={"section-heading mt-2 text-center"}>Întrebări frecvente</h3>

      <p className={"font-helvetica-neue py-4 text-center text-sm leading-6 text-black/70 md:text-base"}>
        Am adunat aici răspunsuri clare la cele mai comune întrebări legate de serviciile noastre.
      </p>

      <div className="mt-4 flex flex-col gap-1.5 md:gap-2.5 md:p-4">
        <FAQItem
          icon={<Image src={timeIcon} alt={"Time icon"} />}
          question="Cât durează realizarea unui website?"
          answer="Durata depinde de complexitate, dar majoritatea proiectelor sunt livrate între 2 și 4 săptămâni. Stabilim etape clare, oferim actualizări constante și livrăm la timp pentru a-ți începe rapid activitatea online."
        />

        <FAQItem
          icon={<Image src={squareIcon} alt={"Square icon"} />}
          question="Cum are loc procesul de lucru?"
          answer="Procesul include: discuție inițială, ofertă, structură, design, dezvoltare, testare și lansare. Comunicăm transparent pentru ca fiecare etapă să fie clară și predictibilă pentru tine."
        />

        <FAQItem
          icon={<Image src={domainIcon} alt={"Domain icon"} />}
          question="Oferiți și găzduire web sau domeniu?"
          answer="Nu furnizăm direct găzduire sau domeniu, însă te putem ghida în alegerea celor mai bune opțiuni. Ne ocupăm de configurare pentru ca site-ul tău să fie online fără bătăi de cap."
        />

        <FAQItem
          icon={<Image src={editIcon} alt={"Edit icon"} />}
          question="Pot actualiza singur conținutul website-ului?"
          answer="Da. Proiectele Business și E-commerce includ CMS, permițându-ți să editezi texte, imagini și produse ușor, fără cunoștințe tehnice. Oferim training și suport dacă ai nevoie de ajutor."
        />
        <FAQItem
          icon={<Image src={markerIcon} alt={"Marker icon"} />}
          question="Pot solicita funcționalități personalizate?"
          answer="Desigur. Putem integra funcționalități specifice business-ului tău — formulare, pagini suplimentare, CRM, plăți online, automatizări etc. Discutăm împreună necesitățile și găsim soluția potrivită."
        />
        <FAQItem
          icon={<Image src={refreshIcon} alt={"Refresh icon"} />}
          question="Oferiți suport după livrare?"
          answer="Da. Oferim suport pentru ajustări minore, ghidare și răspuns rapid la întrebări. Pentru nevoi suplimentare putem discuta un plan de mentenanță avantajos, adaptat business-ului tău."
        />

        <FAQItem
          icon={<Image src={optimizationIcon} alt={"Optimization icon"} />}
          question="Oferiți și optimizare SEO?"
          answer="Da. Toate pachetele includ optimizare SEO de bază pentru vizibilitate. Pentru rezultate avansate putem discuta servicii suplimentare dedicate creșterii organice."
        />
      </div>
    </section>
  );
};
