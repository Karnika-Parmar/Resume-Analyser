import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, FileSearch, Briefcase, GraduationCap, Settings, LogOut, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, hash: "" },
  { label: "Resume Analyzer", icon: FileSearch, hash: "#analyzer" },
  { label: "Job Recommendations", icon: Briefcase, hash: "#jobs" },
  { label: "Courses", icon: GraduationCap, hash: "#courses" },
  { label: "Settings", icon: Settings, hash: "#settings" },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  void pathname;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden transition-opacity",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 h-screen w-72 shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sidebar-border">
          <Link to="/dashboard" className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
              <Sparkles className="size-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold leading-tight">ResumeAI</p>
              <p className="text-[11px] text-muted-foreground">Smart Career OS</p>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden p-1 rounded-md hover:bg-sidebar-accent">
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {items.map((it, idx) => (
            <a
              key={it.label}
              href={`/dashboard${it.hash}`}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                idx === 0
                  ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
              )}
            >
              <it.icon className="size-4" />
              {it.label}
            </a>
          ))}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Link
            to="/signin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/80 hover:bg-destructive/15 hover:text-destructive transition-colors"
          >
            <LogOut className="size-4" />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}