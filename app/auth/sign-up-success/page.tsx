
export default function SignUpSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded shadow text-center">
                <h2 className="text-2xl font-bold mb-4">Sign Up Successful!</h2>
                <p className="mb-6">Thank you for signing up. Please check your email to verify your account.</p>
                <a href="/auth/login" className="text-blue-500 hover:underline">Go to Login</a>
            </div>
        </div>
    );
}