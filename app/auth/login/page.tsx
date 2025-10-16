import { LoginForm } from "@/components/auth/login-form";
import { Smile, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center p-4">
            <div className="card bg-base-100 shadow-2xl rounded-2xl max-w-md w-full">
                <div className="card-body p-8">
                    {/* Header with Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                            <Smile className="w-12 h-12 text-primary" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2 text-primary">
                        চলো লগইন করি! 🔢
                    </h2>
                    <p className="text-center text-base-content/70 mb-6">
                        Welcome back to learning!
                    </p>

                    {/* Login Form */}
                    <LoginForm />

                    {/* Divider */}
                    <div className="divider text-base-content/50">OR</div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-base-content/70">
                            নতুন বন্ধু?{" "}
                            <Link href="/auth/sign-up" className="link link-primary font-semibold">
                                রেজিস্টার করো!
                            </Link>
                        </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex justify-center mt-4 gap-2">
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                        <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                </div>
            </div>
        </main>
    );
}