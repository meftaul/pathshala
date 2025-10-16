import { UpdatePasswordForm } from "@/components/auth/update-password-form";
import { KeyRound, Sparkles } from "lucide-react";
import { Logo } from "@/components/logo";

export default function UpdatePasswordPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-success/10 via-primary/10 to-info/10 flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-2xl rounded-2xl max-w-md w-full">
        <div className="card-body p-8">
          {/* Logo in top-right */}
          <div className="absolute top-4 right-4">
            <Logo size="sm" showIcon={false} />
          </div>

          {/* Header with Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-success/10 p-4 rounded-full">
              <KeyRound className="w-12 h-12 text-success" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-2 text-success">
            নতুন Password সেট করো! 🔑
          </h2>
          <p className="text-center text-base-content/70 mb-6">
            Make it strong and memorable!
          </p>

          {/* Update Password Form */}
          <UpdatePasswordForm />

          {/* Decorative Element */}
          <div className="flex justify-center mt-6 gap-2">
            <Sparkles className="w-4 h-4 text-success animate-pulse" />
            <Sparkles className="w-4 h-4 text-info animate-pulse" />
            <Sparkles className="w-4 h-4 text-success animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}
