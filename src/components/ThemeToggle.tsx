import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const getDark = () => document.documentElement.classList.contains("dark");
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Saved preference wins; otherwise follow the OS setting
        const saved = localStorage.getItem("theme");
        const dark = saved
            ? saved === "dark"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", dark);
        setIsDark(dark);
    }, []);

    const toggle = () => {
        const next = !getDark();
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
        setIsDark(next);
    };

    return (
        <button
            onClick={toggle}
            className="relative flex items-center w-10 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 p-0.5 transition-colors hover:opacity-90 active:scale-95"
            aria-label="Toggle theme"
        >
            {/* Sun on left */}
            <Sun size={11} className="absolute left-0.5 text-yellow-500" />
            {/* Moon on right */}
            <Moon size={11} className="absolute right-0.5 text-accent-500" />
            {/* Knob */}
            <span
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`h-5 w-5 rounded-full shadow-sm transform transition-transform duration-300 ring-1 ring-white/50 ${
                    isDark
                        ? "translate-x-4 bg-accent-500"
                        : "translate-x-0 bg-yellow-500"
                }`}
            />
        </button>
    );
}
