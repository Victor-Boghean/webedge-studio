import Image from "next/image";

import { cn } from "@/lib/utils";
import { AppButton } from "@/components/shared/app-button";

import priceCheck from "@/assets/icons/price-check.svg";

interface PricingCardProps {
  name: string;
  price: string;
  popular?: boolean;
  intro: string;
  features: string[];
  className?: string;
}

export const PricingCard = (props: PricingCardProps) => {
  const { name, price, popular, intro, features, className } = props;

  return (
    <div
      className={cn(
        className ?? "",
        "rounded-[18px] border border-[#D1D1D1] px-4 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
      )}
    >
      <div className={"xlgrid-cols-2 grid h-[35px] w-full grid-cols-[1fr_auto] px-2"}>
        <div className={"font-helvetica-neue py-1 font-bold"}>{name}</div>
        <div className={"font-helvetica-neue xlpx-2 flex items-start justify-end px-1 font-bold"}>
          {popular && (
            <div
              className={
                "font-helvetica-neue xltext-xs rounded-[6px] bg-black/80 px-3 pt-[7px] pb-1 text-[10px] font-medium text-white"
              }
            >
              Cel mai popular
            </div>
          )}
        </div>
      </div>
      <div className={"mt-0.5 flex flex-col gap-6 px-2 pb-4"}>
        <div className={"flex items-end gap-1.5"}>
          <h3 className={"font-sora text-[28px] leading-tight font-semibold"}>€{price}</h3>
          <span className={"font-sora pb-1.5 text-[8px] text-black/45"}>începând de la</span>
        </div>
        <div>
          <AppButton
            label={"Solicită ofertă"}
            className={cn("w-full bg-black/80 shadow-[0_4px_20px_rgba(0,0,0,0.30)]", popular && "bg-black")}
            linkRef={"tel:+37369640892"}
          />
        </div>
      </div>
      <div className={"px-2 py-3"}>
        <div className="h-[1.3px] border-none bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_4px,_transparent_4px,_transparent_8px)]"></div>
      </div>
      <div className={"flex flex-col gap-4 px-2"}>
        <div>
          <p className={"font-sora pt-2.5 pb-1.5 text-sm leading-tight font-semibold"}>Ideal pentru</p>
          <p className={"font-helvetica-neue min-h-[36px] text-sm text-black/60"}>{intro}</p>
        </div>
        <div>
          <p className={"font-sora mb-1 py-2 text-sm leading-tight font-semibold"}>Include</p>
          <div className={"flex flex-col gap-3"}>
            {features &&
              features?.map((feature, index) => (
                <div key={index} className={"flex items-start gap-2"}>
                  <Image src={priceCheck} alt={"Price check icon"} className={"xlmt-0 xlmb-0.5 mt-0.5 scale-110"} />
                  <span className={"font-helvetica-neue text-sm leading-[18px] text-black/60"}>{feature}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
