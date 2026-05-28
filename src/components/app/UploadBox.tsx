import { useRef, useState } from "react";
import { UploadCloud, FileText, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadBoxProps {
  onUpload: (name: string) => void;
  file: string | null;
  onRemove: () => void;
}

export function UploadBox({ onUpload, file, onRemove }: UploadBoxProps) {
  const [drag, setDrag] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handle = (name: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onUpload(name);
    }, 900);
  };

  if (file) {
    return (
      <div className="glass rounded-2xl p-6 flex items-center gap-4 animate-fade-in">
        <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-elegant">
          <FileText className="size-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{file}</p>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
            <CheckCircle2 className="size-3.5 text-emerald-400" />
            Uploaded successfully — analysis ready
          </p>
        </div>
        <button
          onClick={onRemove}
          className="size-9 rounded-lg grid place-items-center hover:bg-destructive/15 hover:text-destructive transition"
          aria-label="Remove file"
        >
          <X className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDrag(false);
        const f = e.dataTransfer.files?.[0];
        if (f) handle(f.name);
      }}
      className={cn(
        "relative rounded-2xl border-2 border-dashed p-10 text-center transition-all",
        drag ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/60 hover:bg-muted/30",
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handle(f.name);
        }}
      />
      <div className="mx-auto size-16 rounded-2xl bg-gradient-primary grid place-items-center shadow-elegant animate-float">
        <UploadCloud className="size-8 text-primary-foreground" />
      </div>
      <h3 className="mt-5 font-semibold text-lg">Drag & drop your resume</h3>
      <p className="text-sm text-muted-foreground mt-1">
        or click to browse — supports PDF and DOCX up to 10 MB
      </p>
      <button
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-sm shadow-elegant hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <UploadCloud className="size-4" /> Upload Resume
          </>
        )}
      </button>
    </div>
  );
}