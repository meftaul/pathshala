import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Create a New Account</h2>
                <SignUpForm />
            </div>
        </div>
    );
}