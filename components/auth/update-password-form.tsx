"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className} {...props}>
      <form onSubmit={handleUpdatePassword} className="space-y-4">
        {/* New Password Field */}
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-semibold">New Password</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="input input-bordered input-success w-full"
            required
          />
          <label className="label">
            <span className="label-text-alt text-base-content/60">
              কমপক্ষে ৬টা character দিতে হবে
            </span>
          </label>
        </div>

        {/* Confirm Password Field */}
        <div className="form-control">
          <label htmlFor="confirmPassword" className="label">
            <span className="label-text font-semibold">Confirm New Password</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="input input-bordered input-success w-full"
            required
          />
          <label className="label">
            <span className="label-text-alt text-base-content/60">
              Same password আবার দাও
            </span>
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-error">
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn btn-success btn-wide w-full"
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner"></span>
              আপডেট হচ্ছে...
            </>
          ) : (
            "Password আপডেট করো! ✨"
          )}
        </button>
      </form>
    </div>
  );
}