interface ChooseCardProps {
  icon: React.ReactNode;
  label: string;
  content: string;
}

export const ChooseCard = ({ icon, label, content }: ChooseCardProps) => {
  return (
    <div className={"flex flex-col items-center gap-8 py-6"}>
      <div
        className={
          "flex h-14 w-14 items-center justify-center rounded-[20px] bg-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
        }
      >
        {icon}
      </div>
      <div className={"flex flex-col items-center gap-6"}>
        <div className={"font-helvetica text-xl font-bold"}>{label}</div>
        <div className={"font-helvetica-neue text-center text-base"}>{content}</div>
      </div>
    </div>
  );
};
