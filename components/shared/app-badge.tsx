import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AppBadgeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  indicator?: boolean;
  icon?: ReactNode;
  className?: string;
}

export const AppBadge = ({ label, indicator, icon, className, ...props }: AppBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className={cn("mb-4 flex items-center gap-2 bg-black/2 px-2.5 py-1.5 md:mb-4 md:px-4 md:py-2", className)}
      {...props}
    >
      {indicator && <span className="bg-primary blink-dot h-2 w-2 rounded-full" />}
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="font-open text-[9px] leading-tight font-semibold md:text-xs">{label}</span>
    </Badge>
  );
};
