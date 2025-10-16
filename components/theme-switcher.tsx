"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Palette } from "lucide-react";


const themes = [
  { name: "light", icon: Sun, label: "Light" },
  { name: "dark", icon: Moon, label: "Dark" },
  { name: "bumblebee", icon: Palette, label: "Bumblebee" },
  { name: "cupcake", icon: Palette, label: "Cupcake" },
  { name: "emerald", icon: Palette, label: "Emerald" },
  { name: "forest", icon: Palette, label: "Forest" },
  { name: "garden", icon: Palette, label: "Garden" },
  { name: "halloween", icon: Palette, label: "Halloween" },
  { name: "lofi", icon: Palette, label: "Lofi" },
  { name: "night", icon: Palette, label: "Night" },
  { name: "synthwave", icon: Palette, label: "Synthwave" },
  { name: "winter", icon: Palette, label: "Winter" },
] as const;

type Theme = (typeof themes)[number]["name"];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get current theme from HTML element or localStorage
    const htmlTheme = document.documentElement.getAttribute("data-theme") as Theme | null;
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setCurrentTheme(htmlTheme || savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <Sun className="h-5 w-5" />
        </div>
      </div>
    );
  }

  const CurrentIcon =
    themes.find((t) => t.name === currentTheme)?.icon || Sun;

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        aria-label="Change theme"
      >
        <CurrentIcon className="h-5 w-5" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg mt-3 border border-base-300"
      >
        {themes.map(({ name, icon: Icon, label }) => (
          <li key={name}>
            <button
              onClick={() => handleThemeChange(name)}
              className={`flex items-center gap-2 ${
                currentTheme === name ? "active" : ""
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
              {currentTheme === name && (
                <span className="ml-auto text-primary">✓</span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
