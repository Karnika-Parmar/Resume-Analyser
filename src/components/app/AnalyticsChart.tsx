import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { scoreTrend, skillMatch } from "@/lib/dummy-data";

const tooltipStyle = {
  background: "oklch(0.21 0.03 270)",
  border: "1px solid oklch(0.32 0.03 270)",
  borderRadius: 10,
  fontSize: 12,
};

export function ResumeTrendChart() {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Resume Score Trend</h3>
          <p className="text-xs text-muted-foreground">Last 6 months</p>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400">+26 pts</span>
      </div>
      <div className="h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={scoreTrend}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.68 0.21 295)" stopOpacity={0.7} />
                <stop offset="100%" stopColor="oklch(0.68 0.21 295)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(0.3 0.03 270)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" stroke="oklch(0.7 0.03 270)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="oklch(0.7 0.03 270)" fontSize={12} tickLine={false} axisLine={false} domain={[40, 100]} />
            <Tooltip contentStyle={tooltipStyle} />
            <Area type="monotone" dataKey="score" stroke="oklch(0.78 0.18 220)" strokeWidth={2.5} fill="url(#g1)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function SkillMatchChart() {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <div>
        <h3 className="font-semibold">Skill Match Analytics</h3>
        <p className="text-xs text-muted-foreground">How your skills align with target roles</p>
      </div>
      <div className="h-56 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skillMatch}>
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.18 220)" />
                <stop offset="100%" stopColor="oklch(0.68 0.21 295)" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(0.3 0.03 270)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="skill" stroke="oklch(0.7 0.03 270)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="oklch(0.7 0.03 270)" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(0.27 0.04 270 / 0.4)" }} />
            <Bar dataKey="value" fill="url(#g2)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}