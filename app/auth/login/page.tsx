import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
                <LoginForm />
            </div>
        </div>
    );
}