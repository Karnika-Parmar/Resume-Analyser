import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { AuthLayout } from "@/components/app/AuthLayout";
import { AuthInput } from "@/components/app/AuthInput";
import { GradientButton } from "@/components/app/GradientButton";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — ResumeAI" },
      { name: "description", content: "Sign in to your ResumeAI account and get AI-powered resume insights." },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Password must be at least 6 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 700);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue analyzing your resume."
      footer={<>Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Create one</Link></>}
    >
      <form onSubmit={submit} className="space-y-4">
        <AuthInput icon={Mail} label="Email" type="email" placeholder="you@example.com" value={email} onChange={setEmail} error={errors.email} />
        <AuthInput icon={Lock} label="Password" type="password" placeholder="••••••••" value={password} onChange={setPassword} error={errors.password} />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 rounded border-border bg-input accent-[oklch(0.68_0.21_295)]"
            />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <a href="#" className="text-primary hover:underline">Forgot password?</a>
        </div>

        <GradientButton type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </GradientButton>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
          <span className="relative flex justify-center text-xs uppercase tracking-wider text-muted-foreground bg-background px-3 mx-auto w-fit">or</span>
        </div>

        <button type="button" className="w-full h-11 rounded-lg border border-border bg-card/40 hover:bg-card font-medium text-sm transition">
          Continue with Google
        </button>
      </form>
    </AuthLayout>
  );
}