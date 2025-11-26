import Image from "next/image";

import { ServiceCard } from "@/components/shared/service-card";
import { AppBadge } from "@/components/shared/app-badge";

import feather from "@/assets/icons/feather.svg";

export const OurServices = () => {
  return (
    <section className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
      <AppBadge label={"Serviciile noastre"} icon={<Image src={feather} alt={"Feather"} />} className={"gap-1"} />
      <h3 className={"section-heading mt-2 text-center"}>Soluții complete</h3>

      <p className={"font-helvetica-neue py-4 text-center text-sm leading-6 text-black/70 md:max-w-2xl md:text-base"}>
        Servicii digitale complete care acoperă totul, de la strategie și design până la dezvoltare, optimizare și
        suport continuu.
      </p>

      <div className="grid w-full grid-cols-1 gap-6 pt-8 sm:grid-cols-2 md:items-start lg:grid-cols-3 xl:gap-10">
        <ServiceCard
          index={"01"}
          label={"Dezvoltare web"}
          content={"Website-uri performante, scalabile și optimizate pentru creștere"}
          tags={["Landing", "E-commerce", "CMS", "Responsive"]}
        />
        <ServiceCard
          index={"02"}
          label={"Aplicații mobile"}
          content={"Soluții mobile moderne, optimizate pentru nevoile utilizatorilor"}
          tags={["iOS și Android", "Cross-platform", "Design intuitiv"]}
        />
        <ServiceCard
          index={"03"}
          label={"UI/UX Design"}
          content={"Design modern și intuitiv, adaptat brandului tău pentru o experiență memorabilă"}
          tags={["Wireframes", "Prototipare", "Branding vizual"]}
        />
        <ServiceCard
          index={"04"}
          label={"Branding & Identitate vizuală"}
          content={"Construim o identitate vizuală puternică ce diferențiază brandul tău"}
          tags={["Logo", "Tipografie", "Paletă de culori"]}
        />
        <ServiceCard
          index={"05"}
          label={"SEO & Optimizare"}
          content={"Optimizăm site-ul pentru vizibilitate, viteză crescută și poziționare mai bună"}
          tags={["SEO on-page", "Viteză optimizată", "Analitice"]}
        />
        <ServiceCard
          index={"06"}
          label={"Mentenanță & Suport"}
          content={"Oferim actualizări, securitate și suport constant pentru funcționare impecabilă"}
          tags={["Monitorizare", "Securitate", "Actualizări", "Backup"]}
        />
      </div>
      {/*<AppButton*/}
      {/*  className={"mt-12"}*/}
      {/*  label={"Programează o consultație"}*/}
      {/*  icon={<Image src={calendar} alt="Calendar icon" />}*/}
      {/*  iconPosition={"right"}*/}
      {/*/>*/}
    </section>
  );
};
