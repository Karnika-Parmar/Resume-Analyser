import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  icon: LucideIcon;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export function AuthInput({ icon: Icon, label, type = "text", placeholder, value, onChange, error }: AuthInputProps) {
  const [show, setShow] = useState(false);
  const isPwd = type === "password";
  const realType = isPwd && show ? "text" : type;

  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <div className={`mt-1.5 relative flex items-center rounded-lg border bg-input/60 transition focus-within:ring-2 focus-within:ring-primary/30 ${error ? "border-destructive" : "border-border focus-within:border-primary"}`}>
        <Icon className="ml-3 size-4 text-muted-foreground" />
        <input
          type={realType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-muted-foreground"
        />
        {isPwd && (
          <button type="button" onClick={() => setShow((v) => !v)} className="pr-3 text-muted-foreground hover:text-foreground">
            {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-destructive mt-1.5">{error}</p>}
    </div>
  );
}