import { useState, useEffect } from "react";
import { resume } from "../data/resume";
import { resumeEs } from "../data/resume.es";
import type { Resume } from "../data/types";
import { Languages } from "lucide-react";

// Switches between the English resume and the static Spanish translation
// (src/data/resume.es.ts). Both ship in the bundle, so the toggle is instant
// and needs no network, API key, or cache.
export function TranslationToggle({ onSwitch }: { onSwitch: (r: Resume) => void }) {
  const [lang, setLang] = useState<"en" | "es">("en");

  // On mount: restore the last language choice.
  useEffect(() => {
    // Tidy up the cache left behind by the old API-based translation flow.
    localStorage.removeItem("resume_es");

    if (localStorage.getItem("lang") === "es") {
      onSwitch(resumeEs);
      setLang("es");
    }
  }, [onSwitch]);

  function handleToggle() {
    const next = lang === "en" ? "es" : "en";
    onSwitch(next === "es" ? resumeEs : resume);
    setLang(next);
    localStorage.setItem("lang", next);
  }

  return (
    <button
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full bg-zinc-200 dark:bg-zinc-700 px-4 py-1.5 text-sm shadow hover:opacity-90 transition"
    >
      <Languages size={16} className="opacity-80" />
      {lang === "en" ? "Español" : "English"}
    </button>
  );
}
