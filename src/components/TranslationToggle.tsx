import { useState, useEffect } from "react";
import { resume, CV_VERSION } from "../data/resume";
import { Languages, Loader2 } from "lucide-react";

type Resume = typeof resume;

const API_URL = import.meta.env.VITE_API_URL;
const FRONTEND_KEY = import.meta.env.VITE_TRANSLATE_API_KEY;
const LIFETIME_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export function TranslationToggle({ onSwitch }: { onSwitch: (r: Resume) => void }) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [loading, setLoading] = useState(false);

  // On mount -> check cached Spanish resume
  useEffect(() => {
    const cached = localStorage.getItem("resume_es");
    if (cached) {
      try {
        const { data, timestamp, version } = JSON.parse(cached);
        const valid =
          Date.now() - timestamp < LIFETIME_MS && version === CV_VERSION;

        if (valid && localStorage.getItem("lang") === "es") {
          onSwitch(data);
          setLang("es");
        } else if (!valid) {
          localStorage.removeItem("resume_es"); // expired or outdated
        }
      } catch {
        console.warn("Invalid cached translation, clearing");
        localStorage.removeItem("resume_es");
      }
    }
  }, [onSwitch]);

  // Handle translate button click
  async function handleTranslate() {
    if (lang === "en") {
      setLoading(true);
      try {
        const cached = localStorage.getItem("resume_es");
        if (cached) {
          const { data, timestamp, version } = JSON.parse(cached);
          const valid =
            Date.now() - timestamp < LIFETIME_MS && version === CV_VERSION;

          if (valid) {
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

        // Store with TTL + version
        localStorage.setItem(
          "resume_es",
          JSON.stringify({
            data: data.translated,
            timestamp: Date.now(),
            version: CV_VERSION,
          })
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
  // Render button
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
