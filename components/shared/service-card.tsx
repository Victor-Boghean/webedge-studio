interface ServiceCardProps {
  index: string;
  label: string;
  content: string;
  cta?: string;
  tags?: string[];
}

export const ServiceCard = ({ index, label, content, cta, tags }: ServiceCardProps) => {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border-2 border-[rgba(0,0,0,0.06)] bg-white p-6 lg:gap-4">
      <div className="flex flex-col gap-3">
        <div className="font-sora text-primary/70 text-base font-semibold">{`/${index}`}</div>
        <div className="font-sora text-lg font-bold">{label}</div>
      </div>
      <p className="font-helvetica-neue text-sm font-medium text-black/60 lg:text-base">{content}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.length &&
          tags?.map((tag, index) => (
            <div
              key={index}
              className="font-sora rounded-full bg-black/10 px-2 py-1 text-[9px] leading-tight font-medium text-black lg:px-4 lg:py-2 lg:text-[10px]"
            >
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};
