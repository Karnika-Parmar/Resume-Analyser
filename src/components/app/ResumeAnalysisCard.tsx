import { useEffect, useState } from "react";
import { skillsDetected, missingSkills, suggestions } from "@/lib/dummy-data";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

function Ring({ value, label, color }: { value: number; label: string; color: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setV(value), 80);
    return () => clearTimeout(t);
  }, [value]);
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center">
      <div className="relative size-28">
        <svg viewBox="0 0 100 100" className="size-full -rotate-90">
          <circle cx="50" cy="50" r={r} stroke="var(--muted)" strokeWidth="9" fill="none" />
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke={color}
            strokeWidth="9"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={c}
            strokeDashoffset={c - (c * v) / 100}
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-2xl font-semibold">{v}%</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function ResumeAnalysisCard() {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setBar(82), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Resume Score</h3>
              <p className="text-sm text-muted-foreground">AI-driven analysis of your latest upload</p>
            </div>
            <span className="text-3xl font-bold text-gradient">82%</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full bg-gradient-primary rounded-full"
              style={{ width: `${bar}%`, transition: "width 1.6s cubic-bezier(.22,1,.36,1)" }}
            />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Ring value={88} label="ATS Compatibility" color="oklch(0.78 0.18 220)" />
            <Ring value={75} label="Skill Coverage" color="oklch(0.68 0.21 295)" />
            <Ring value={70} label="Experience Match" color="oklch(0.78 0.16 160)" />
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Experience Level</h3>
          <p className="text-sm text-muted-foreground mt-1">Estimated from your work history</p>
          <p className="mt-6 text-4xl font-bold text-gradient">Mid</p>
          <p className="text-sm text-muted-foreground">~ 3 years professional experience</p>
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Roles found</span><span>4</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Projects detected</span><span>11</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Certifications</span><span>2</span></div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold flex items-center gap-2"><CheckCircle2 className="size-4 text-emerald-400" /> Skills Detected</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {skillsDetected.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/30">{s}</span>
            ))}
          </div>
          <h3 className="font-semibold flex items-center gap-2 mt-6"><AlertCircle className="size-4 text-amber-400" /> Missing / Recommended</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {missingSkills.map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">{s}</span>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold flex items-center gap-2"><Lightbulb className="size-4 text-accent" /> Improvement Suggestions</h3>
          <ul className="mt-4 space-y-3">
            {suggestions.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="shrink-0 size-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold grid place-items-center">{i + 1}</span>
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}