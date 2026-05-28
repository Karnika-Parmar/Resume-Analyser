import { useEffect, useRef } from "react";
import { notifications } from "@/lib/dummy-data";

export function NotificationDropdown({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-80 rounded-xl glass shadow-elegant overflow-hidden animate-scale-in z-50"
    >
      <div className="px-4 py-3 border-b border-border">
        <p className="font-semibold text-sm">Notifications</p>
        <p className="text-xs text-muted-foreground">You have {notifications.length} new updates</p>
      </div>
      <ul className="max-h-80 overflow-auto">
        {notifications.map((n, i) => (
          <li key={i} className="px-4 py-3 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{n.body}</p>
              </div>
              <span className="text-[10px] text-muted-foreground shrink-0">{n.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}