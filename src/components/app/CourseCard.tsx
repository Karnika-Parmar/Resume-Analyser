import { Clock, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  desc: string;
  duration: string;
  rating: number;
  hue: number;
}

export function CourseCard({ title, desc, duration, rating, hue }: CourseCardProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden hover-lift group">
      <div
        className="h-32 relative"
        style={{
          background: `linear-gradient(135deg, oklch(0.55 0.22 ${hue}), oklch(0.7 0.18 ${(hue + 60) % 360}))`,
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <span className="absolute bottom-3 left-4 text-xs font-medium px-2.5 py-1 rounded-full bg-black/30 backdrop-blur text-white">
          New
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{desc}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {duration}</span>
          <span className="inline-flex items-center gap-1.5"><Star className="size-3.5 fill-amber-400 text-amber-400" /> {rating}</span>
        </div>
        <button className="mt-4 w-full py-2 rounded-lg bg-primary/15 text-primary text-sm font-medium hover:bg-gradient-primary hover:text-primary-foreground transition-all">
          Enroll Now
        </button>
      </div>
    </div>
  );
}