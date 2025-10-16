import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import { Unlock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 flex items-center justify-center p-4">
            <div className="card bg-base-100 shadow-2xl rounded-2xl max-w-md w-full">
                <div className="card-body p-8">
                    {/* Header with Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="bg-accent/10 p-4 rounded-full">
                            <Unlock className="w-12 h-12 text-accent" />
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center mb-2 text-accent">
                        ওহ না! পাসওয়ার্ড ভুলে গেছো? 😅
                    </h2>
                    <p className="text-center text-base-content/70 mb-6">
                        চিন্তা নাই! আমরা তোমাকে হেল্প করবো 💪
                    </p>

                    {/* Forgot Password Form */}
                    <ForgotPasswordForm />

                    {/* Back to Login Link */}
                    <div className="divider text-base-content/50"></div>
                    <div className="text-center">
                        <p className="text-base-content/70">
                            মনে পড়ে গেছে?{" "}
                            <Link href="/auth/login" className="link link-accent font-semibold">
                                লগইন করো!
                            </Link>
                        </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="flex justify-center mt-4 gap-2">
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                        <Sparkles className="w-4 h-4 text-warning animate-pulse" />
                        <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                    </div>
                </div>
            </div>
        </main>
    );
}