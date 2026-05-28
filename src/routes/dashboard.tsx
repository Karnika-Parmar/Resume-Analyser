import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FileText, Target, Briefcase, Sparkles } from "lucide-react";
import { Sidebar } from "@/components/app/Sidebar";
import { Navbar } from "@/components/app/Navbar";
import { UploadBox } from "@/components/app/UploadBox";
import { StatsCard } from "@/components/app/StatsCard";
import { ResumeAnalysisCard } from "@/components/app/ResumeAnalysisCard";
import { JobCard } from "@/components/app/JobCard";
import { CourseCard } from "@/components/app/CourseCard";
import { ResumeTrendChart, SkillMatchChart } from "@/components/app/AnalyticsChart";
import { jobs, courses } from "@/lib/dummy-data";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — ResumeAI" },
      {
        name: "description",
        content: "Your AI-powered resume analysis, job matches and skill insights.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const [sidebar, setSidebar] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar open={sidebar} onClose={() => setSidebar(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar onMenu={() => setSidebar(true)} />

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 space-y-10 overflow-x-hidden">
          {/* Welcome */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 sm:p-10 border border-border">
            <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/30 blur-3xl animate-float" />
            <div className="absolute -bottom-20 left-10 size-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                <Sparkles className="size-3" /> AI co-pilot ready
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold mt-4">
                Welcome back, <span className="text-gradient">Karnika</span> 👋
              </h1>
              <p className="text-muted-foreground mt-2 max-w-lg">
                Upload your latest resume to get an instant ATS score, smart skill insights, and
                curated job & course matches built just for you.
              </p>
            </div>
          </section>

          {/* Quick stats */}
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard icon={FileText} label="Resume Score" value="82 / 100" delta="+12" />
            <StatsCard icon={Target} label="ATS Compatibility" value="88%" delta="+5%" />
            <StatsCard icon={Briefcase} label="Job Matches" value="42" delta="+8" />
            <StatsCard icon={Sparkles} label="Skill Coverage" value="75%" delta="+9%" />
          </section>

          {/* Upload */}
          <section id="analyzer" className="space-y-4">
            <header className="flex items-end justify-between flex-wrap gap-2">
              <div>
                <h2 className="text-2xl font-semibold">Resume Analyzer</h2>
                <p className="text-sm text-muted-foreground">
                  Drop your resume to unlock AI insights below.
                </p>
              </div>
            </header>
            <UploadBox file={file} onUpload={setFile} onRemove={() => setFile(null)} />
          </section>

          {/* Analysis appears after upload */}
          {file && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">AI Analysis</h2>
              <ResumeAnalysisCard />
            </section>
          )}

          {/* Jobs */}
          <section id="jobs" className="space-y-4">
            <header>
              <h2 className="text-2xl font-semibold">Recommended jobs</h2>
              <p className="text-sm text-muted-foreground">
                Matched to your skills and experience.
              </p>
            </header>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {jobs.map((j) => (
                <JobCard key={j.title} {...j} />
              ))}
            </div>
          </section>

          {/* Analytics */}
          <section className="grid gap-5 lg:grid-cols-2">
            <ResumeTrendChart />
            <SkillMatchChart />
          </section>

          {/* Courses */}
          <section id="courses" className="space-y-4">
            <header>
              <h2 className="text-2xl font-semibold">Courses to boost your score</h2>
              <p className="text-sm text-muted-foreground">
                Hand-picked from your missing-skill list.
              </p>
            </header>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((c) => (
                <CourseCard key={c.title} {...c} />
              ))}
            </div>
          </section>

          <footer className="py-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} ResumeAI
          </footer>
        </main>
      </div>
    </div>
  );
}
