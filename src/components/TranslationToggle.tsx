import { useState, useEffect } from "react";
import { resume } from "../data/resume";
import { Languages } from "lucide-react";

type Resume = typeof resume;

const API_URL = import.meta.env.VITE_API_URL; 

export function TranslationToggle({ onSwitch }: { onSwitch: (r: Resume) => void }) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [loading, setLoading] = useState(false);

  // Load cached Spanish version on mount
  useEffect(() => {
    const cached = localStorage.getItem("resume_es");
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as Resume;
        // preload Spanish resume into parent if user left in ES mode
        if (localStorage.getItem("lang") === "es") {
          onSwitch(parsed);
          setLang("es");
        }
      } catch {
        console.warn("Invalid cached Spanish resume, ignoring");
      }
    }
  }, [onSwitch]);

  async function handleTranslate() {
    if (lang === "en") {
      setLoading(true);
      try {
        const cached = localStorage.getItem("resume_es");
        if (cached) {
          const parsed = JSON.parse(cached) as Resume;
          onSwitch(parsed);
          setLang("es");
          localStorage.setItem("lang", "es");
        } else {
          const res = await fetch(API_URL, {
            method: "POST",
            headers: { 
              "Content-Type": "application/json",
              "x-api-key": import.meta.env.TRANSLATE_API_KEY,
            },
            body: JSON.stringify({ resume, targetLang: "Spanish" }),
          });

          if (!res.ok) throw new Error("Translation request failed");

          const data = await res.json();
          onSwitch(data.translated);

          // Cache it
          localStorage.setItem("resume_es", JSON.stringify(data.translated));
          localStorage.setItem("lang", "es");

          setLang("es");
        }
      } catch (err) {
        console.error("Translation error", err);
      } finally {
        setLoading(false);
      }
    } else {
      onSwitch(resume);
      setLang("en");
      localStorage.setItem("lang", "en");
    }
  }

  return (
     <button
      onClick={handleTranslate}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-full bg-zinc-200 dark:bg-zinc-700 px-4 py-1.5 text-sm shadow hover:opacity-90 transition"
    >
      <Languages size={16} className="opacity-80" />
      {loading
        ? "Translating..."
        : lang === "en"
        ? "Español"
        : "English"}
    </button>
  );
}
