import { cn } from "@/lib/utils";

interface InfoStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export const InfoStat = (props: InfoStatProps) => {
  const { value, label, icon, className } = props;
  return (
    <div
      className={cn(
        className ?? "",
        "flex flex-col items-center justify-center gap-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
      )}
    >
      <div className={"flex gap-3"}>
        {icon}
        <h2 className={"font-open mr-1 text-xl leading-tight font-bold lg:text-[32px]"}>{value}</h2>
      </div>
      <p className={"font-open text-xs font-semibold text-black/60 lg:text-sm"}>{label}</p>
    </div>
  );
};
