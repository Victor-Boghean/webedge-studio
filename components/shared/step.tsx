interface StepProps {
  number: string;
  title: string;
  description: string;
}

export const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="p-2.5">
      <div className={"flex flex-col items-center gap-4 py-4 text-center"}>
        <span className="font-sora text-primary text-[32px] leading-tight font-extrabold">{number}</span>
        <h3 className="font-open text-lg font-bold md:text-xl">{title}</h3>
        <p className="font-helvetica-neue max-w-lg text-sm text-black/70 md:text-base">{description}</p>
      </div>
    </div>
  );
};
