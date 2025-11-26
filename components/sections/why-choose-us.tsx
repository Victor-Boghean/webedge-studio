import Image from "next/image";

import { AppBadge } from "@/components/shared/app-badge";

import check from "@/assets/icons/check.svg";
import performance from "@/assets/svg/performance.svg";
import modernDesign from "@/assets/images/sections/modern-design.png";
import graph from "@/assets/svg/graph.svg";

export const WhyChooseUs = () => {
  return (
    <section className={"container flex flex-col items-center justify-center py-12 md:py-16"}>
      <AppBadge label={"Avantajele noastre"} icon={<Image src={check} alt={"Check"} />} className={"gap-1"} />
      <h3 className={"section-heading mt-2"}>De ce să ne alegi</h3>

      <p className={"font-helvetica-neue max-w-xl py-4 text-center text-sm leading-6 text-black/70 md:text-base"}>
        Suntem alături de tine cu soluții rapide, construite cu grijă și profesionalism, pentru a-ți susține creșterea
        online.
      </p>

      <div className="grid w-full grid-cols-1 gap-8 pt-8 sm:grid-cols-2 md:items-start lg:grid-cols-3">
        <div className="flex flex-col gap-12 rounded-2xl border-2 border-[rgba(0,0,0,0.06)] bg-white p-6">
          <div className="flex h-[250px] flex-col items-center justify-center gap-8 rounded-[8px]">
            <Image src={performance} alt={"Performance icon"} className="mt-8" />
            <div className="flex flex-col items-center gap-2">
              <div className="font-sora text-xs text-[#9CA9CC]">Performanță web</div>
              <div className="font-sora text-xl font-bold md:text-[22px]">98%</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-primary/70 font-sora text-base font-semibold">/01</div>
              <div className="font-sora text-lg font-bold">Performanță garantată</div>
            </div>
            <div className={"font-helvetica-neue text-sm font-medium text-black/60 md:text-base"}>
              Website rapid, stabil și optimizat pentru rezultate constante
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 rounded-2xl border-2 border-[rgba(0,0,0,0.06)] bg-white p-6">
          <div className="h-[250px] overflow-hidden rounded-[8px]">
            <Image src={modernDesign} alt={"Modern design icon"} className={"object-cover"} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-primary/70 font-sora text-base font-semibold">/02</div>
              <div className="font-sora text-lg font-bold">Design inovativ</div>
            </div>
            <div className={"font-helvetica-neue text-sm font-medium text-black/60 md:text-base"}>
              Interfețe moderne și intuitive, create pentru experiențe memorabile
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-12 rounded-2xl border-2 border-[rgba(0,0,0,0.06)] bg-white p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex h-[250px] flex-col items-center justify-end gap-8 rounded-[8px]">
            <div className="mt-8 flex flex-col items-center justify-end gap-2">
              <div className="font-sora text-xs text-[#9CA9CC]">Trafic lunar pe website</div>
              <div className="font-sora mb-2 text-xl font-bold md:mb-3 md:text-2xl">12.450 vizitatori</div>
              <div className="font-sora rounded-full bg-[#05CD99]/10 px-2 py-1 text-[9px] font-bold text-[#05CD99] md:text-[10px]">
                +42.3%
              </div>
            </div>
            <Image src={graph} alt={"Graph icon"} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <div className="text-primary/70 font-sora text-base font-semibold">/03</div>
              <div className="font-sora text-lg font-bold">Impact vizibil</div>
            </div>
            <div className={"font-helvetica-neue text-sm font-medium text-black/60 md:text-base"}>
              Raportări clare ce demonstrează impactul real al soluțiilor noastre implementate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
