import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const useDark = storedTheme ? storedTheme === "dark" : prefersDark;
    if (useDark) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed top-5 right-5 z-50 p-2.5 rounded-full",
        "bg-card/60 backdrop-blur-md border border-border",
        "hover:bg-primary/10 hover:border-primary/50 hover:scale-110",
        "transition-all duration-300 shadow-sm"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-700" />
      )}
    </button>
  );
};
