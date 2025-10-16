import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPasswordPage() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-lg relative z-10">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}