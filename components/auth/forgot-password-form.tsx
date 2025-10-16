"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

    return (
      <div className={className} {...props}>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text font-semibold">তোমার Email</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
              className="input input-bordered input-accent w-full"
            />
            <label className="label">
              <span className="label-text-alt text-base-content/60">
                We'll send you a password reset link
              </span>
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-error">
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-bold">Email পাঠানো হয়েছে! 📧</h3>
                <div className="text-sm">Check your email for the reset link!</div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || success}
            className="btn btn-accent btn-wide w-full"
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner"></span>
                পাঠানো হচ্ছে...
              </>
            ) : success ? (
              "Email Sent! ✅"
            ) : (
              "Reset Link পাঠাও 🔗"
            )}
          </button>
        </form>
      </div>
    );
}