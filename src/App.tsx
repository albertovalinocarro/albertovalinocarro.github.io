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
        { label: currentResume.labels?.experience      ?? "Experience",        href: "#experience"       },
        { label: currentResume.labels?.skills          ?? "Skills",            href: "#skills"           },
        { label: currentResume.labels?.personalProjects ?? "Personal Projects", href: "#personal-projects"},
        { label: currentResume.labels?.contact         ?? "Contact",           href: "#contact"          },
    ];

    return (
        <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-20 backdrop-blur bg-white/90 dark:bg-zinc-900/90 border-b border-[#e5e5e5] dark:border-zinc-800">
                {/* Main bar */}
                <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between gap-4" style={{ height: "72px" }}>

                    {/* Brand */}
                    <div className="min-w-0 overflow-hidden">
                        <h1 className="text-[16px] sm:text-[18px] font-bold leading-tight truncate">{currentResume.name}</h1>
                        <p className="hidden sm:block text-[13px] leading-tight mt-0.5 truncate" style={{ color: "#6b7280" }}>
                            {currentResume.title} · {currentResume.location}
                        </p>
                    </div>

                    {/* Nav — desktop only */}
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

            {/* Hero */}
            <div className="bg-white dark:bg-zinc-900 border-b border-[#e5e5e5] dark:border-zinc-700">
                <div className="mx-auto max-w-3xl px-4 py-16">
                    <TypingHero />
                    <ContactBar />
                </div>
            </div>

            {/* Main */}
            <main>
                {/* 01 — Summary */}
                <Section index={0} id="summary" title={currentResume.labels?.summary ?? "Professional Summary"}>
                    <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{currentResume.summary}</p>
                </Section>

                {/* 02 — Skills */}
                <Section index={1} id="skills" title={currentResume.labels?.skills ?? "Core Skills"}>
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

                {/* 03 — Experience */}
                <Section index={2} id="experience" title={currentResume.labels?.experience ?? "Professional Experience"}>
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

                {/* 04 — Education */}
                <Section index={3} id="education" title={currentResume.labels?.education ?? "Academic Experience"}>
                    <ul className="space-y-3">
                        {currentResume.education.map((e) => (
                            <li key={e.title} className="flex items-baseline justify-between">
                                <span>{e.title}</span>
                                <span className="text-sm opacity-70">{e.year}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                {/* 05 — Personal Projects ← NEW */}
                <Section index={4} id="personal-projects" title={currentResume.labels?.personalProjects ?? "Personal Projects"}>
                    <div className="space-y-10">
                        {currentResume.personalProjects?.map((project) => (
                            <article key={project.name}>
                                {/* Project header */}
                                <header className="flex items-baseline justify-between gap-2 mb-3">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <h3 className="font-semibold text-base">
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                            >
                                                {project.name}
                                            </a>
                                        </h3>
                                        {/* Stack tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.stack.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-[#d1d5db] dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">{project.period}</span>
                                </header>

                                {/* Summary */}
                                <p className="text-zinc-700 dark:text-zinc-300 text-sm mb-3 leading-relaxed">
                                    {project.summary}
                                </p>

                                {/* Bullet points */}
                                <ul className="list-disc pl-5 space-y-1.5">
                                    {project.points.map((pt, i) => (
                                        <li key={i} className="text-sm text-zinc-700 dark:text-zinc-300">{pt}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Section>

                {/* 06 — Key Accomplishments */}
                <Section index={5} id="projects" title={currentResume.labels?.projects ?? "Key Accomplishments"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.projects.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </Section>

                {/* 07 — Additional Information */}
                <Section index={6} id="extras" title={currentResume.labels?.extras ?? "Additional Information"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.extras.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </ul>
                </Section>

                {/* 08 — Contact */}
                <Section index={7} id="contact" title={currentResume.labels?.contact ?? "Get In Touch"}>
                    <ContactForm labels={currentResume.labels} />
                </Section>

                {/* 09 — Terminal */}
                <Section index={8} id="terminal" title="Interactive Terminal">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 -mt-1">
                        Try: <code className="font-mono">whoami</code>,{" "}
                        <code className="font-mono">skills</code>,{" "}
                        <code className="font-mono">experience</code>,{" "}
                        <code className="font-mono">projects</code>,{" "}
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