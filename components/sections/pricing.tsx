import Image from "next/image";

import { AppBadge } from "@/components/shared/app-badge";
import { PricingCard } from "@/components/shared/pricing-card";

import pricing from "@/assets/icons/pricing.svg";

export const Pricing = () => {
  return (
    <section className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
      <AppBadge label={"Pachete & Prețuri"} icon={<Image src={pricing} alt={"Pricing icon"} />} className={"gap-1"} />
      <h3 className={"section-heading mt-2 text-center"}>Planuri create pentru tine</h3>

      <p className={"font-helvetica-neue max-w-md py-4 text-center text-sm leading-6 text-black/70 md:text-base"}>
        Pachete transparente și adaptate pentru a oferi rezultate durabile în mediul digital.
      </p>

      <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:p-4 xl:grid-cols-3">
        <PricingCard
          name={"Pachet Start"}
          price={"390"}
          intro={"Proiecte mici ce necesită o soluție rapidă, accesibilă și esențială pentru prezență online."}
          features={[
            "Până la 5 pagini esențiale, realizate profesionist",
            "Design modern + adaptat pentru mobil",
            "Formular de contact integrat și funcțional",
            "Optimizare SEO de bază pentru vizibilitate",
            "Suport prin email pentru întrebări rapide",
          ]}
        />
        <PricingCard
          name={"Pachet Business"}
          price={"950"}
          intro={"Companiile ce urmăresc un site stabil, modern și ușor de extins pe măsură ce cresc."}
          popular={true}
          features={[
            "Între 6–12 pagini personalizate pentru afacerea ta",
            "CMS integrat — poți actualiza conținutul ușor",
            "Blog inclus pentru publicarea articolelor",
            "SEO avansat pentru poziționare mai bună în Google",
            "Suport prioritar și mici ajustări post-lansare",
          ]}
        />
        <PricingCard
          name={"Pachet E-commerce"}
          price={"1850"}
          intro={"Afaceri online ce vor să vândă mai ușor, sigur și organizat."}
          features={[
            "Magazin online complet, adaptat brandului tău",
            "Sistem de plăți online + gestionare comenzi",
            "Administrare produse — ușor de actualizat",
            "Optimizare conversii pentru vânzări mai mari",
            "Training și suport pentru gestionarea magazinului",
          ]}
        />
      </div>
    </section>
  );
};
