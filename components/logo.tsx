import Link from "next/link";
import { Sparkles } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export function Logo({ size = "md", showIcon = true }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6 md:w-7 md:h-7",
    lg: "w-8 h-8 md:w-10 md:h-10",
  };

  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <span className={`font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent ${sizeClasses[size]}`}>
        বাংলা.AI
      </span>
      {showIcon && (
        <Sparkles className={`text-accent animate-pulse ${iconSizes[size]}`} />
      )}
    </Link>
  );
}
