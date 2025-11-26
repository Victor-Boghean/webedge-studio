"use client";

import { useState } from "react";

interface FAQItemProps {
  icon?: React.ReactNode;
  question: string;
  answer: string;
}

export const FAQItem = ({ icon, question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex max-w-3xl items-start gap-3 py-4 md:gap-4 md:px-2.5">
      {icon && <div className="mt-[5px]">{icon}</div>}

      <div className="flex flex-1 flex-col">
        <button
          className="flex w-full justify-between gap-4 hover:cursor-pointer md:gap-0"
          onClick={() => setOpen(!open)}
        >
          <span className="font-sora text-start text-base font-semibold md:text-xl">{question}</span>

          <svg
            className={`h-6 w-6 transform font-semibold text-black/40 transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ${open ? "mt-4 max-h-40" : "max-h-0"}`}>
          <p className="font-helvetica-neue mr-5 text-sm leading-relaxed text-black/60 md:mr-10 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
