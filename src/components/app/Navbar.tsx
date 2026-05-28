import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { NotificationDropdown } from "./NotificationDropdown";

interface NavbarProps {
  onMenu: () => void;
}

export function Navbar({ onMenu }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 glass border-b border-border">
      <div className="flex items-center gap-3 px-4 sm:px-6 h-16">
        <button onClick={onMenu} className="lg:hidden p-2 rounded-md hover:bg-muted">
          <Menu className="size-5" />
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <input
            placeholder="Search jobs, skills, courses..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-input/60 border border-border outline-none text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative size-10 rounded-lg grid place-items-center hover:bg-muted transition"
            >
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-accent animate-pulse-glow" />
            </button>
            {open && <NotificationDropdown onClose={() => setOpen(false)} />}
          </div>

          <div className="flex items-center gap-2.5 pl-2 sm:pl-3 sm:border-l border-border">
            <div className="size-9 rounded-full bg-gradient-primary grid place-items-center font-semibold text-primary-foreground text-sm shadow-elegant">
              KP
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-medium">Karnika Parmar</p>
              <p className="text-xs text-muted-foreground">Pro plan</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
