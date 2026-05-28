import { Link } from "@tanstack/react-router";
import { Sparkles, Shield, Zap, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gradient-hero">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-20 size-80 rounded-full bg-accent/25 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-2.5 z-10">
          <div className="size-10 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
            <Sparkles className="size-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">ResumeAI</span>
        </Link>

        <div className="relative z-10 max-w-md">
          <h2 className="text-4xl font-bold leading-tight">
            Land your next role with an <span className="text-gradient">AI co-pilot</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Upload your resume and instantly get an ATS score, missing-skill insights, and personalized job & course recommendations.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              { icon: Zap, t: "Instant resume scoring in seconds" },
              { icon: Shield, t: "Private — your data never leaves your browser" },
              { icon: BarChart3, t: "Actionable analytics & skill gap charts" },
            ].map((f) => (
              <div key={f.t} className="glass rounded-xl p-3.5 flex items-center gap-3">
                <div className="size-9 rounded-lg bg-gradient-primary grid place-items-center">
                  <f.icon className="size-4 text-primary-foreground" />
                </div>
                <p className="text-sm">{f.t}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-xs text-muted-foreground">© {new Date().getFullYear()} ResumeAI · Built for ambitious candidates.</p>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
              <Sparkles className="size-5 text-primary-foreground" />
            </div>
            <span className="font-semibold">ResumeAI</span>
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="text-sm text-muted-foreground mt-8 text-center">{footer}</p>
        </div>
      </div>
    </div>
  );
}