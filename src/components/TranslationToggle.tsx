import { useState, useEffect } from "react";
import { resume } from "../data/resume";
import { Languages, Loader2 } from "lucide-react";

type Resume = typeof resume;

const API_URL = import.meta.env.VITE_API_URL;
const FRONTEND_KEY = import.meta.env.VITE_TRANSLATE_API_KEY;
const LIFETIME_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function TranslationToggle({ onSwitch }: { onSwitch: (r: Resume) => void }) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [loading, setLoading] = useState(false);

  // On mount -> check cache
  useEffect(() => {
    const cached = localStorage.getItem("resume_es");
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < LIFETIME_MS) {
          if (localStorage.getItem("lang") === "es") {
            onSwitch(data);
            setLang("es");
          }
        } else {
          localStorage.removeItem("resume_es"); // expired
        }
      } catch {
        console.warn("Invalid cached Spanish resume, clearing.");
        localStorage.removeItem("resume_es");
      }
    }
  }, [onSwitch]);

  async function handleTranslate() {
    if (lang === "en") {
      setLoading(true);
      try {
        const cached = localStorage.getItem("resume_es");
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < LIFETIME_MS) {
            onSwitch(data);
            setLang("es");
            localStorage.setItem("lang", "es");
            setLoading(false);
            return;
          }
        }

        // Otherwise fetch fresh translation
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": FRONTEND_KEY,
          },
          body: JSON.stringify({ resume, targetLang: "Spanish" }),
        });

        if (!res.ok) throw new Error("Translation request failed");

        const data = await res.json();
        onSwitch(data.translated);

        localStorage.setItem(
          "resume_es",
          JSON.stringify({ data: data.translated, timestamp: Date.now() })
        );
        localStorage.setItem("lang", "es");

        setLang("es");
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
      {loading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="animate-spin" size={16} />
          Translating...
        </span>
      ) : (
        <>
          <Languages size={16} className="opacity-80" />
          {lang === "en" ? "Español" : "English"}
        </>
      )}
    </button>
  );
}
