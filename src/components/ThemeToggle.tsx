import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const getDark = () => document.documentElement.classList.contains("dark");
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
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
            <Moon size={11} className="absolute right-0.5 text-indigo-500" />
            {/* Knob */}
            <span
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={`h-5 w-5 rounded-full shadow-sm transform transition-transform duration-300 ring-1 ring-white/50 ${
                    isDark
                        ? "translate-x-4 bg-indigo-500"
                        : "translate-x-0 bg-yellow-500"
                }`}
            />
        </button>
    );
}
