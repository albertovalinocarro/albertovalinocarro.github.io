import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { resume as resumeEn } from "./data/resume";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import { ContactBar } from "./components/ContactBar";
import {TranslationToggle} from "./components/TranslationToggle.tsx";
import Footer from "./components/Footer.tsx";
import { TypingHero } from "./components/TypingHero.tsx";
import { Terminal } from "./components/Terminal.tsx";
import { ContactForm } from "./components/ContactForm.tsx";

export default function App() {
    const [currentResume, setCurrentResume] = useState(resumeEn);
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: currentResume.labels?.experience ?? "Experience", href: "#experience" },
        { label: currentResume.labels?.skills     ?? "Skills",     href: "#skills"     },
        { label: currentResume.labels?.projects   ?? "Projects",   href: "#projects"   },
        { label: currentResume.labels?.contact    ?? "Contact",    href: "#contact"    },
    ];

    return (
        <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-20 backdrop-blur bg-white/90 dark:bg-zinc-900/90 border-b border-[#e5e5e5] dark:border-zinc-800">
                {/* Main bar */}
                <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between gap-4" style={{ height: "72px" }}>

                    {/* Brand — left: shrinks on mobile, subtitle hidden below sm */}
                    <div className="min-w-0 overflow-hidden">
                        <h1 className="text-[16px] sm:text-[18px] font-bold leading-tight truncate">{currentResume.name}</h1>
                        <p className="hidden sm:block text-[13px] leading-tight mt-0.5 truncate" style={{ color: "#6b7280" }}>
                            {currentResume.title} · {currentResume.location}
                        </p>
                    </div>

                    {/* Nav — desktop only (≥ 768px) */}
                    <nav className="hidden md:flex items-center" style={{ gap: "32px" }}>
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-[14px] whitespace-nowrap text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Controls — far right */}
                    <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 sm:border-l border-[#e5e5e5] dark:border-zinc-700 sm:pl-6">
                        <TranslationToggle onSwitch={setCurrentResume} />
                        <ThemeToggle />
                        {/* Hamburger — mobile only */}
                        <button
                            className="md:hidden flex-shrink-0 p-1.5 text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMenuOpen(o => !o)}
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                </div>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="md:hidden border-t border-[#e5e5e5] dark:border-zinc-800 bg-white dark:bg-zinc-900">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center px-6 text-[15px] text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors border-b border-[#f0f0f0] dark:border-zinc-800 last:border-b-0"
                                style={{ height: "48px" }}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <div className="bg-white dark:bg-zinc-900 border-b border-[#e5e5e5] dark:border-zinc-700">
                <div className="mx-auto max-w-3xl px-4 py-16">
                    <TypingHero />
                    <ContactBar />
                </div>
            </div>

            {/* Main */}
            <main>
                <Section index={0} id="summary" title={currentResume.labels?.summary ?? "Resumen Profesional"}>
                    <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{currentResume.summary}</p>
                </Section>

                <Section index={1} id="skills" title={currentResume.labels?.skills ?? "Habilidades Clave"}>
                    <motion.div
                        className="flex flex-wrap gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.06 } },
                        }}
                    >
                        {currentResume.skills.map((s, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                                }}
                                className="
                                    rounded-[6px] px-3 py-1 text-sm
                                    border border-[#d1d5db] dark:border-zinc-600
                                    bg-zinc-50 dark:bg-zinc-800
                                    text-zinc-800 dark:text-zinc-200
                                    hover:bg-indigo-50 dark:hover:bg-indigo-950
                                    hover:border-indigo-400 dark:hover:border-indigo-500
                                    transition-colors duration-200
                                "
                            >
                                {s}
                            </motion.span>
                        ))}
                    </motion.div>
                </Section>

                <Section index={2} id="experience" title={currentResume.labels?.experience ?? "Experiencia Profesional"}>
                    <div>
                        {currentResume.experience.map((job, i, arr) => (
                            <article key={job.role + job.company} className="mb-12 last:mb-0">
                                <header className="flex items-baseline justify-between gap-2">
                                    <h3 className="font-semibold">{job.role} — {job.company}</h3>
                                    <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">{job.period}</span>
                                </header>

                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                    {job.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>

                                {i < arr.length - 1 && (
                                    <div className="mt-12 border-t border-[#e5e5e5] dark:border-zinc-700" />
                                )}
                            </article>
                        ))}
                    </div>
                </Section>

                <Section index={3} id="education" title={currentResume.labels?.education ?? "Educación"}>
                    <ul className="space-y-3">
                        {currentResume.education.map((e) => (
                            <li key={e.title} className="flex items-baseline justify-between">
                                <span>{e.title}</span>
                                <span className="text-sm opacity-70">{e.year}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section index={4} id="projects" title={currentResume.labels?.projects ?? "Proyectos"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.projects.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </Section>

                <Section index={5} id="extras" title={currentResume.labels?.extras ?? "Extras"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.extras.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </ul>
                </Section>

                <Section index={6} id="contact" title={currentResume.labels?.contact ?? "Get In Touch"}>
                    <ContactForm labels={currentResume.labels} />
                </Section>

                <Section index={7} id="terminal" title="Interactive Terminal">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 -mt-1">
                        Try: <code className="font-mono">whoami</code>,{" "}
                        <code className="font-mono">skills</code>,{" "}
                        <code className="font-mono">experience</code>,{" "}
                        <code className="font-mono">contact</code>,{" "}
                        <code className="font-mono">help</code>
                    </p>
                    <div className="mt-6">
                        <Terminal />
                    </div>
                </Section>
            </main>

            {/* Footer */}
            <Footer currentResume={currentResume} />
        </div>
    );
}
