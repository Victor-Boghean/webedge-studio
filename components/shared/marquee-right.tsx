export const MarqueeRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-[var(--animation-marquee-right)] gap-3">
        {children}
        {children} {/* duplicat pentru loop */}
      </div>
    </div>
  );
};
