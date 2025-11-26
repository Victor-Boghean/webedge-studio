import Image from "next/image";

import logo from "@/assets/images/branding/webedge-logo.svg";
import mail from "@/assets/icons/mail-icon.svg";
import phone from "@/assets/icons/phone-icon.svg";
import Link from "next/link";

export const Footer = () => (
  <footer className="bg-main-gray overflow-hidden py-20">
    <div className={"container"}>
      <div className="flex flex-col gap-4 pb-4">
        <div className="font-sora text-xl font-semibold">Contacte</div>
        <div className="flex flex-col justify-center gap-4">
          <div className={"flex items-center gap-4"}>
            <Image src={phone} alt={"Phone icon"} />
            <Link
              href="tel:+37369640892"
              className="font-sora hover:text-primary/70 text-sm transition-all duration-150 ease-in-out hover:cursor-pointer"
            >
              +373 69 640 892
            </Link>
          </div>
          <div className={"flex items-center gap-4"}>
            <Image src={mail} alt={"Mail icon"} />
            <Link
              href={"mailto:victor.boghean15@gmail.com"}
              className="font-sora hover:text-primary/70 text-sm transition-all duration-150 ease-in-out hover:cursor-pointer"
            >
              webedgestudio@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <hr className={"py-2.5"} />
      <div className={"flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"}>
        <Image src={logo} alt="Logo" />
        <div className={"font-sora text-xs"}>© 2025 WebEdgeStudio. Toate drepturile rezervate.</div>
      </div>
    </div>
  </footer>
);
