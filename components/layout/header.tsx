"use client";
import React, { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { AppButton } from "@/components/shared/app-button";
import { BurgerMenu } from "@/components/shared/burger-menu";
import { useScrollSection } from "@/lib/hooks/useScrollSection";

import logo from "@/assets/images/branding/webedge-logo.svg";

export const Header = () => {
  const { goToSection } = useScrollSection();

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    goToSection(sectionId);
  };

  return (
    <header
      className={cn(
        "z-50 container grid grid-cols-2 items-center overflow-hidden bg-transparent py-6 transition-all duration-200 lg:grid-cols-[minmax(max-content,1fr)_auto_minmax(max-content,1fr)]"
      )}
    >
      <div className="w-full justify-self-start">
        <Image src={logo} alt="Logo" className={"max-w-[130px] lg:max-w-none"} />
      </div>

      <nav className="font-helvetica-neue hidden gap-4 justify-self-center font-medium lg:flex">
        <Link href="/" onClick={(e) => handleScroll(e, "services")} className={"group default-transition"}>
          <span className={"link"}>Servicii</span>
        </Link>
        <Link href="/" onClick={(e) => handleScroll(e, "about")} className={"group default-transition"}>
          <span className={"link"}>Despre noi</span>
        </Link>
        <Link href="/" className={"group default-transition"}>
          <span className={"link"}>Portofoliu</span>
        </Link>
        <Link href="/" onClick={(e) => handleScroll(e, "pricing")} className={"group default-transition"}>
          <span className={"link"}>Prețuri</span>
        </Link>
        <Link href="/" onClick={(e) => handleScroll(e, "footer")} className={"group default-transition"}>
          <span className={"link"}>Contacte</span>
        </Link>
      </nav>

      <div className="hidden justify-self-end font-medium lg:block">
        <AppButton label={"Contactează-ne"} linkRef="tel:+37369640892" />
      </div>

      <BurgerMenu />
    </header>
  );
};
