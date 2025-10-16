import { UpdatePasswordForm } from "@/components/auth/update-password-form";

export default function UpdatePasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Your Password</h2>
        <UpdatePasswordForm />
      </div>
    </div>
  );
}
