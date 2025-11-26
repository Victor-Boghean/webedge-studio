"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { AppBadge } from "@/components/shared/app-badge";
import { TechCard } from "@/components/shared/tech-card";

import techStack from "@/assets/icons/tech-stack.svg";
import react from "@/assets/icons/react.svg";
import tailwind from "@/assets/icons/tailwindcss.svg";
import javascript from "@/assets/icons/js.svg";
import typescript from "@/assets/icons/typescript.svg";
import nextjs from "@/assets/icons/nextjs.svg";
import nodejs from "@/assets/icons/nodejs.svg";
import nestjs from "@/assets/icons/nestjs.svg";
import redux from "@/assets/icons/redux.svg";
import html5 from "@/assets/icons/html5.svg";
import prisma from "@/assets/icons/prisma.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import supabase from "@/assets/icons/supabase.svg";
import css3 from "@/assets/icons/css3.svg";
import webpack from "@/assets/icons/webpack.svg";

export const TechStack = () => {
  const marqueeSwiperConfig = {
    modules: [Autoplay],
    className: "marquee-swiper",
    spaceBetween: 12,
    slidesPerView: "auto" as const,
    loop: true,
    speed: 6000,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: false,
  };

  return (
    <section className={"container py-12 md:py-16"}>
      <div className={"flex flex-col items-center justify-center"}>
        <AppBadge label={"Tech Stack"} icon={<Image src={techStack} alt={"Tech stack icon"} />} className={"gap-1"} />
        <h3 className={"section-heading mt-2 text-center"}>Tehnologiile pe care le folosim</h3>
        <p className={"font-helvetica-neue max-w-md py-4 text-center text-sm leading-6 text-black/70 md:text-base"}>
          Alegem tehnologii moderne, rapide și sigure, pentru a livra platforme stabile, scalabile și ușor de
          administrat.
        </p>
      </div>

      <div className={"mt-8 flex flex-col gap-3 overflow-hidden"}>
        <Swiper {...marqueeSwiperConfig}>
          <SwiperSlide>
            <TechCard icon={<Image src={tailwind} className={"scale-75 md:scale-100"} alt={"Tailwind icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={javascript} className={"scale-75 md:scale-100"} alt={"Javascript icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={nextjs} className={"scale-75 md:scale-100"} alt={"Nextjs icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={react} className={"scale-75 md:scale-100"} alt={"React icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={typescript} className={"scale-75 md:scale-100"} alt={"Typescript icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={nodejs} className={"scale-75 md:scale-100"} alt={"Nodejs icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={nestjs} className={"scale-75 md:scale-100"} alt={"Nestjs icon"} />} />
          </SwiperSlide>
        </Swiper>
        <Swiper {...marqueeSwiperConfig} dir="rtl">
          <SwiperSlide>
            <TechCard icon={<Image src={redux} className={"scale-75 md:scale-100"} alt={"Redux icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={html5} className={"scale-75 md:scale-100"} alt={"Html5 icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={prisma} className={"scale-75 md:scale-100"} alt={"Prisma icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={postgresql} className={"scale-75 md:scale-100"} alt={"Postgresql icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={supabase} className={"scale-75 md:scale-100"} alt={"Supabase icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={css3} className={"scale-75 md:scale-100"} alt={"Css3 icon"} />} />
          </SwiperSlide>
          <SwiperSlide>
            <TechCard icon={<Image src={webpack} className={"scale-75 md:scale-100"} alt={"Webpack icon"} />} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
