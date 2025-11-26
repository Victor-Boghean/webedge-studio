import Image from "next/image";

import { AppButton } from "@/components/shared/app-button";
import { AppBadge } from "@/components/shared/app-badge";

import arrowDown from "@/assets/icons/arrow-down.svg";
import email from "@/assets/icons/email.svg";

export const Hero = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-start pt-14 pb-12 md:py-16">
      <AppBadge label={"Partenerul tău pentru soluții web inteligente"} indicator />
      <div className={"relative flex flex-col items-center justify-center px-10"}>
        <h1 className="font-sora bg-[linear-gradient(90deg,#252424_0%,#4A515D_90%)] bg-clip-text text-7xl leading-tight font-bold text-transparent antialiased drop-shadow-[0_20px_100px_rgba(0,0,0,0.12)] md:text-[144px]">
          WebEdge
        </h1>
        <div className="relative">
          <h2 className="font-sora text-primary text-7xl leading-tight font-bold antialiased drop-shadow-[0_20px_110px_rgba(0,0,0,0.30)] md:text-[144px]">
            Studio
          </h2>
          <div className="pointer-events-none absolute inset-0 top-1/2 z-0 mx-auto h-[148px] w-[266px] rounded-[9999px] bg-[rgba(0,82,222,0.15)] ring-1 ring-black/10 blur-[200px] ring-inset md:h-[248px] md:w-[366px]" />
        </div>
        <div className={"dot-bounce bounce-animation top-1/2 left-0"} />
        <div className={"dot-bounce blink-dot right-1/6 bottom-1/8"} />
      </div>
      <p className="font-helvetica-neue mt-6 max-w-2xs text-center text-xs leading-5 font-medium text-black/60 md:max-w-xl md:text-xl md:leading-8 md:font-medium">
        Construim soluții web moderne, rapide și sigure — adaptate nevoilor afacerii tale și orientate spre rezultate
        concrete.
      </p>
      <div className={"mt-8 flex flex-wrap gap-4 md:gap-8"}>
        <AppButton
          label={"Solicită o ofertă"}
          icon={<Image src={email} alt="Email" className={"scale-90 md:scale-100"} />}
          iconPosition={"right"}
        />
        <AppButton
          label={"Află mai multe"}
          icon={<Image src={arrowDown} alt="Arrow down" className={"scale-90 md:scale-100"} />}
          iconPosition={"right"}
        />
      </div>
    </section>
  );
};
