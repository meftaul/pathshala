"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Password দুইটা মিলছে না। আবার চেষ্টা করো!");
      setIsLoading(false);
      return;
    }

    if (!agreedToTerms) {
      setError("Terms এবং Privacy Policy-তে রাজি হও");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className={className} {...props}>
      <form onSubmit={handleSignUp} className="space-y-4">
        {/* Email Field */}
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="input input-bordered input-secondary w-full"
          />
        </div>

        {/* Password Field */}
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="input input-bordered input-secondary w-full"
          />
          <label className="label">
            <span className="label-text-alt text-base-content/60">
              At least 6 characters
            </span>
          </label>
        </div>

        {/* Confirm Password Field */}
        <div className="form-control">
          <label htmlFor="confirmPassword" className="label">
            <span className="label-text font-semibold">Confirm Password</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="input input-bordered input-secondary w-full"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="form-control">
          <label className="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="checkbox checkbox-secondary"
            />
            <span className="label-text">
              I agree to the{" "}
              <a href="/terms" className="link link-secondary">Terms</a> and{" "}
              <a href="/privacy" className="link link-secondary">Privacy Policy</a>
            </span>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-error">
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-secondary btn-wide w-full"
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner"></span>
              রেজিস্টার হচ্ছে...
            </>
          ) : (
            "Sign Up করো! 🎉"
          )}
        </button>
      </form>

      {/* Google Sign Up */}
      <div className="mt-4">
        <button
          onClick={handleGoogleSignUp}
          disabled={isLoading}
          className="btn btn-outline btn-accent w-full"
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner"></span>
              Redirecting...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google দিয়ে Sign Up
            </>
          )}
        </button>
      </div>
    </div>
  );
}