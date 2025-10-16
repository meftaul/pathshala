
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registration Successful - Welcome to Pathshala",
  description: "Congratulations! Your Pathshala account has been created successfully. Check your email to verify your account and start your Math and Science learning journey.",
  keywords: [
    "Registration successful",
    "Account created",
    "Pathshala signup complete",
    "Email verification",
    "Bangla education welcome",
    "Math learning welcome",
    "Science education success"
  ],
  openGraph: {
    title: "Welcome to Pathshala - Registration Successful",
    description: "Congratulations! Your Pathshala account has been created successfully. Check your email to verify your account and start your Math and Science learning journey.",
    url: "/auth/sign-up-success",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignUpSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded shadow text-center">
                <h2 className="text-2xl font-bold mb-4">Sign Up Successful!</h2>
                <p className="mb-6">Thank you for signing up. Please check your email to verify your account.</p>
                <Link href="/auth/login" className="text-blue-500 hover:underline">Go to Login</Link>
            </div>
        </div>
    );
}