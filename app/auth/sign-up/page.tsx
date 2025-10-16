import { SignUpForm } from "@/components/auth/sign-up-form";
import { UserPlus, Sparkles } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function SignUpPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 flex items-center justify-center p-4">
            <div className="card bg-base-100 shadow-2xl rounded-2xl max-w-md w-full">
                <div className="card-body p-8">
                    {/* Logo in top-right */}
                    <div className="absolute top-4 right-4">
                        <Logo size="sm" showIcon={false} />
                    </div>

                    {/* Header with Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="bg-secondary/10 p-4 rounded-full">
                            <UserPlus className="w-12 h-12 text-secondary" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2 text-secondary">
                        নতুন বন্ধু? রেজিস্টার করো!
                    </h2>
                    <p className="text-center text-base-content/70 mb-6">
                        Join the learning adventure! 🚀
                    </p>

                    {/* Sign Up Form */}
                    <SignUpForm />

                    {/* Divider */}
                    <div className="divider text-base-content/50">OR</div>

                    {/* Login Link */}
                    <div className="text-center">
                        <p className="text-base-content/70">
                            Already have an account?{" "}
                            <Link href="/auth/login" className="link link-secondary font-semibold">
                                লগইন করো!
                            </Link>
                        </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex justify-center mt-4 gap-2">
                        <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                </div>
            </div>
        </main>
    );
}