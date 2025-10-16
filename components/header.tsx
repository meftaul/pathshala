import { Logo } from "./logo";
import { AuthButton } from "./auth/auth-button";
import { ThemeSwitcher } from "./theme-switcher";

export async function Header() {
  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <Logo size="md" showIcon={true} />
      </div>

      <div className="navbar-end gap-2">
        <AuthButton />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
