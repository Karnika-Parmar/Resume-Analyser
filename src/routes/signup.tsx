import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { AuthLayout } from "@/components/app/AuthLayout";
import { AuthInput } from "@/components/app/AuthInput";
import { GradientButton } from "@/components/app/GradientButton";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create account — ResumeAI" },
      { name: "description", content: "Create your free ResumeAI account in seconds." },
    ],
  }),
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 6) next.password = "Use at least 6 characters.";
    if (confirm !== password) next.confirm = "Passwords do not match.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => navigate({ to: "/dashboard" }), 700);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join 12,000+ candidates leveling up with AI."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="space-y-4">
        <AuthInput
          icon={User}
          label="Full name"
          placeholder="Karnika Parmar"
          value={name}
          onChange={setName}
          error={errors.name}
        />
        <AuthInput
          icon={Mail}
          label="Email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          error={errors.email}
        />
        <AuthInput
          icon={Lock}
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={setPassword}
          error={errors.password}
        />
        <AuthInput
          icon={Lock}
          label="Confirm password"
          type="password"
          placeholder="••••••••"
          value={confirm}
          onChange={setConfirm}
          error={errors.confirm}
        />

        <p className="text-xs text-muted-foreground">
          By creating an account you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <GradientButton type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </GradientButton>
      </form>
    </AuthLayout>
  );
}
