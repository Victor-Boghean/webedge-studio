interface TechCardProps {
  icon: React.ReactNode;
}

export const TechCard = ({ icon }: TechCardProps) => {
  return (
    <div
      className={
        "flex h-[80px] w-[155px] items-center justify-center rounded-xl bg-[#F6F6F6] md:h-[120px] md:w-[225px] md:rounded-2xl"
      }
    >
      {icon}
    </div>
  );
};
