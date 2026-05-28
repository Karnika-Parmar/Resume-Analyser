import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GradientButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "w-full inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm shadow-elegant hover:opacity-90 active:scale-[0.98] transition disabled:opacity-60",
        className,
      )}
    >
      {children}
    </button>
  );
}