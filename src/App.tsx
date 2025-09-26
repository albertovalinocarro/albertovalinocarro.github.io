import { useState } from "react";
import { resume as resumeEn } from "./data/resume";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import { ContactBar } from "./components/ContactBar";
import {TranslationToggle} from "./components/TranslationToggle.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
    const [currentResume, setCurrentResume] = useState(resumeEn);

    return (
        <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-10 backdrop-blur bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">{currentResume.name}</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <TranslationToggle onSwitch={setCurrentResume} />
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-3xl px-4 mt-4">
                <h2 className="text-2xl font-bold">{currentResume.title}</h2>
                <ContactBar />
            </div>

            {/* Main */}
            <main className="mx-auto max-w-3xl px-4 py-8 space-y-12">
                <Section id="summary" title={currentResume.labels?.summary ?? "Resumen Profesional"}>
                    <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">{currentResume.summary}</p>
                </Section>

                <Section id="skills" title={currentResume.labels?.skills ?? "Habilidades Clave"}>
                    <div className="flex flex-wrap gap-2">
                        {currentResume.skills.map((s) => (
                            <span
                                key={s}
                                className="
                                    rounded-full px-3 py-1 text-sm
                                    bg-zinc-100 dark:bg-zinc-800
                                    text-zinc-800 dark:text-zinc-200
                                    hover:bg-indigo-100 hover:dark:bg-indigo-800
                                    transition-colors duration-200
                                "
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </Section>

                <Section id="experience" title={currentResume.labels?.experience ?? "Experiencia Profesional"}>
                    <div className="space-y-6">
                        {currentResume.experience.map((job) => (
                            <article
                                key={job.role + job.company}
                                className="
                                    relative rounded-xl border border-zinc-200 dark:border-zinc-700
                                    bg-white dark:bg-zinc-900 p-5 shadow-sm
                                "
                            >
                            {/* Accent bar */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-indigo-500" />

                            <header className="flex items-baseline justify-between gap-2 pl-3">
                                <h3 className="font-semibold">{job.role} — {job.company}</h3>
                                <span className="text-sm text-zinc-500 dark:text-zinc-400">{job.period}</span>
                            </header>

                            <ul className="mt-3 list-disc pl-8 space-y-1">
                                {job.points.map((pt, i) => (
                                <li key={i}>{pt}</li>
                                ))}
                            </ul>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="education" title={currentResume.labels?.education ?? "Educación"}>
                    <ul className="space-y-3">
                        {currentResume.education.map((e) => (
                            <li key={e.title} className="flex items-baseline justify-between">
                                <span>{e.title}</span>
                                <span className="text-sm opacity-70">{e.year}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="projects" title={currentResume.labels?.projects ?? "Proyectos"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.projects.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </Section>

                <Section id="extras" title={currentResume.labels?.extras ?? "Extras"}>
                    <ul className="list-disc pl-5 space-y-2">
                        {currentResume.extras.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </ul>
                </Section>
            </main>

            {/* Footer */}
            <Footer currentResume={currentResume} />
        </div>
    );
}
