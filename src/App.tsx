import { useMemo, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Menu, X, Mail, FileDown, ExternalLink } from "lucide-react";
import { resume as resumeEn } from "./data/resume";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import { ContactBar } from "./components/ContactBar";
import { TranslationToggle } from "./components/TranslationToggle.tsx";
import Footer from "./components/Footer.tsx";
import { TypingHero } from "./components/TypingHero.tsx";
import { Terminal } from "./components/Terminal.tsx";
import { ContactForm } from "./components/ContactForm.tsx";
import { ScrollProgress } from "./components/ScrollProgress.tsx";
import { useScrollSpy } from "./hooks/useScrollSpy";

const NAV_SECTION_IDS = ["experience", "skills", "personal-projects", "contact"];

export default function App() {
    const [currentResume, setCurrentResume] = useState(resumeEn);
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useScrollSpy(useMemo(() => NAV_SECTION_IDS, []));

    const navLinks = [
        { label: currentResume.labels?.experience      ?? "Experience",        href: "#experience",        id: "experience"        },
        { label: currentResume.labels?.skills          ?? "Skills",            href: "#skills",            id: "skills"            },
        { label: currentResume.labels?.personalProjects ?? "Personal Projects", href: "#personal-projects", id: "personal-projects" },
        { label: currentResume.labels?.contact         ?? "Contact",           href: "#contact",           id: "contact"           },
    ];

    return (
        <MotionConfig reducedMotion="user">
        <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-20 backdrop-blur bg-white/90 dark:bg-zinc-900/90 border-b border-[#e5e5e5] dark:border-zinc-800">
                {/* Main bar */}
                <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between gap-4" style={{ height: "72px" }}>

                    {/* Brand */}
                    <a href="#top" className="min-w-0 overflow-hidden">
                        <p className="text-[16px] sm:text-[18px] font-bold leading-tight truncate">{currentResume.name}</p>
                        <p className="hidden sm:block text-[13px] leading-tight mt-0.5 truncate" style={{ color: "#6b7280" }}>
                            {currentResume.title} · {currentResume.location}
                        </p>
                    </a>

                    {/* Nav — desktop only */}
                    <nav className="hidden md:flex items-center" style={{ gap: "32px" }}>
                        {navLinks.map(({ label, href, id }) => (
                            <a
                                key={href}
                                href={href}
                                aria-current={activeSection === id ? "true" : undefined}
                                className={`text-[14px] whitespace-nowrap transition-colors ${
                                    activeSection === id
                                        ? "text-accent-600 dark:text-accent-400 font-medium"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {/* Controls — far right */}
                    <div className="no-print flex-shrink-0 flex items-center gap-2 sm:gap-3 sm:border-l border-[#e5e5e5] dark:border-zinc-700 sm:pl-6">
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

                {/* Reading progress */}
                <ScrollProgress />
            </header>

            {/* Hero */}
            <div id="top" className="bg-dot-grid bg-white dark:bg-zinc-900 border-b border-[#e5e5e5] dark:border-zinc-700">
                <div className="mx-auto max-w-3xl px-4 py-20 sm:py-24">
                    <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3 select-none" aria-hidden="true">
                        // hello, world
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
                        {currentResume.name}
                    </h1>
                    <TypingHero titles={currentResume.typingTitles ?? resumeEn.typingTitles} />
                    <p className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {currentResume.labels?.heroTagline ?? resumeEn.labels.heroTagline}
                    </p>

                    {/* CTAs */}
                    <div className="no-print mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium
                                       bg-accent-600 hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600
                                       text-white transition-colors"
                        >
                            <Mail size={16} />
                            {currentResume.labels?.contact ?? "Get In Touch"}
                        </a>
                        <a
                            href="/cv-alberto-valino-carro.pdf"
                            download="CV-Alberto-Valino-Carro.pdf"
                            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium
                                       border border-zinc-300 dark:border-zinc-600
                                       text-zinc-700 dark:text-zinc-200
                                       hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                        >
                            <FileDown size={16} />
                            {currentResume.labels?.downloadCv ?? resumeEn.labels.downloadCv}
                        </a>
                    </div>

                    <div className="mt-8">
                        <ContactBar />
                    </div>
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
                    {/* Translations from the deployed API may not include skillGroups
                        yet — in that case render the (translated) flat skills list
                        rather than silently showing the English groups. */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.05 } },
                        }}
                    >
                        {(currentResume.skillGroups ?? [{ label: "", items: currentResume.skills }]).map((group) => (
                            <motion.div
                                key={group.label}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                                }}
                            >
                                {group.label && (
                                    <p className="font-mono text-[12px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 select-none">
                                        {group.label}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((s) => (
                                        <span
                                            key={s}
                                            className="
                                                rounded-[6px] px-3 py-1 text-sm
                                                border border-[#d1d5db] dark:border-zinc-600
                                                bg-zinc-50 dark:bg-zinc-800
                                                text-zinc-800 dark:text-zinc-200
                                                hover:bg-accent-50 dark:hover:bg-accent-950
                                                hover:border-accent-400 dark:hover:border-accent-500
                                                transition-colors duration-200
                                            "
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                {/* 03 — Experience (timeline) */}
                <Section index={2} id="experience" title={currentResume.labels?.experience ?? "Professional Experience"}>
                    <div className="relative border-l-2 border-zinc-200 dark:border-zinc-700 pl-6 sm:pl-8 space-y-12">
                        {currentResume.experience.map((job) => (
                            <article key={job.role + job.company} className="relative">
                                {/* Timeline marker */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full
                                               bg-accent-500 dark:bg-accent-400 ring-4 ring-white dark:ring-zinc-900"
                                />
                                <header className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h3 className="font-semibold">{job.role} — {job.company}</h3>
                                    <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">{job.period}</span>
                                </header>
                                <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                                    {job.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
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

                {/* 05 — Personal Projects */}
                <Section index={4} id="personal-projects" title={currentResume.labels?.personalProjects ?? "Personal Projects"}>
                    <div className="grid gap-6">
                        {currentResume.personalProjects?.map((project) => (
                            <motion.article
                                key={project.name}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="rounded-xl border border-zinc-200 dark:border-zinc-700
                                           bg-white dark:bg-zinc-800/60 p-5 sm:p-6
                                           shadow-sm hover:shadow-md hover:border-accent-400 dark:hover:border-accent-500
                                           transition-[box-shadow,border-color] duration-200"
                            >
                                {/* Project header */}
                                <header className="flex items-baseline justify-between gap-2 mb-3">
                                    <h3 className="font-semibold text-base">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-accent-600 dark:text-accent-400 hover:underline"
                                        >
                                            {project.name}
                                            <ExternalLink size={14} className="opacity-70" />
                                        </a>
                                    </h3>
                                    <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">{project.period}</span>
                                </header>

                                {/* Stack tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.stack.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-[#d1d5db] dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

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
                            </motion.article>
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
                <Section index={7} id="contact" title={currentResume.labels?.contact ?? "Get In Touch"} noPrint>
                    <ContactForm labels={currentResume.labels} />
                </Section>

                {/* 09 — Terminal */}
                <Section
                    index={8}
                    id="terminal"
                    title={currentResume.labels?.terminalTitle ?? resumeEn.labels.terminalTitle ?? "Interactive Terminal"}
                    noPrint
                >
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 -mt-1">
                        Try: <code className="font-mono">whoami</code>,{" "}
                        <code className="font-mono">skills</code>,{" "}
                        <code className="font-mono">experience</code>,{" "}
                        <code className="font-mono">projects</code>,{" "}
                        <code className="font-mono">contact</code>,{" "}
                        <code className="font-mono">help</code> —{" "}
                        {currentResume.labels?.terminalHint ?? resumeEn.labels.terminalHint}
                    </p>
                    <div className="mt-6">
                        <Terminal />
                    </div>
                </Section>
            </main>

            {/* Footer */}
            <Footer currentResume={currentResume} />
        </div>
        </MotionConfig>
    );
}
