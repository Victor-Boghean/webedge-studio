export const MarqueeLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="flex animate-[var(--animation-marquee-left)] gap-3">
        {children}
        {children} {/* duplicat pentru loop */}
      </div>
    </div>
  );
};
