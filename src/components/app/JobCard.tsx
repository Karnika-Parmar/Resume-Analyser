import { MapPin, Briefcase, ArrowUpRight } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  match: number;
  exp: string;
}

export function JobCard({ title, company, location, salary, match, exp }: JobCardProps) {
  return (
    <div className="glass rounded-2xl p-5 hover-lift group">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">{company}</p>
          <h4 className="font-semibold text-lg mt-0.5">{title}</h4>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-muted-foreground">Match</p>
          <p className="font-bold text-gradient text-lg">{match}%</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" /> {location}</span>
        <span className="inline-flex items-center gap-1.5"><Briefcase className="size-3.5" /> {exp}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium">{salary}</span>
        <button className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant group-hover:translate-x-0.5 transition-transform">
          Apply <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}