import Image from "next/image";

import { AppBadge } from "@/components/shared/app-badge";
import { InfoStat } from "@/components/shared/info-stat";

import quotes from "@/assets/icons/quotes.svg";
import illustration from "@/assets/images/sections/Illustration.jpg";
import award from "@/assets/icons/award.svg";
import clock from "@/assets/icons/clock.svg";
import star from "@/assets/icons/star.svg";

export const AboutUs = () => {
  return (
    <section className={"container flex flex-col justify-center py-12 md:py-16"} id="about">
      <AppBadge label={"Despre noi"} icon={<Image src={quotes} alt={"Quotes"} />} className={"gap-1"} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
        <div>
          <div className={"mb-4 md:pb-6"}>
            <h3 className={"section-heading mt-2"}>Construim</h3>
            <h3 className={"section-heading"}>Viitorul Digital</h3>
          </div>

          <p className={"font-helvetica-neue text-sm leading-7 text-black/70 md:text-base"}>
            Am creat WebEdge Studio pentru a face digitalizarea accesibilă, modernă și sigură pentru orice afacere.
            Suntem mai mult decât un simplu studio — suntem partenerul tău de încredere în drumul spre prezența online
            care aduce rezultate reale.
          </p>

          <div
            className={
              "flex flex-wrap justify-around gap-8 pt-10 md:flex-nowrap md:justify-between lg:gap-20 lg:pt-16 lg:pr-16"
            }
          >
            <InfoStat
              value={"5+"}
              label={"Experiență"}
              icon={<Image src={award} className={"w-5 md:w-auto"} alt={"Award icon"} />}
            />
            <InfoStat
              value={"100%"}
              label={"Livrare la timp"}
              icon={<Image className={"w-5 md:w-auto"} src={clock} alt={"Star icon"} />}
            />
            <InfoStat
              value={"99.9%"}
              label={"Satisfacție"}
              icon={<Image src={star} className={"w-5 md:w-auto"} alt={"Star icon"} />}
            />
          </div>
        </div>
        <div className={"flex items-center xl:px-12"}>
          <div className={"rounded-3xl pt-6 md:p-6"}>
            <Image src={illustration} alt={"About us image"} className={"max-h-[281px] rounded-3xl object-cover"} />
          </div>
        </div>
      </div>
    </section>
  );
};
