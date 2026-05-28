import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delta?: string;
}

export function StatsCard({ icon: Icon, label, value, delta }: StatsCardProps) {
  return (
    <div className="glass rounded-2xl p-5 hover-lift">
      <div className="flex items-center justify-between">
        <div className="size-11 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
          <Icon className="size-5 text-primary-foreground" />
        </div>
        {delta && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400">
            {delta}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-4">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}