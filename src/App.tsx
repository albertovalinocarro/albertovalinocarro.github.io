import { resume } from "./data/resume";
import { ThemeToggle } from "./components/ThemeToggle";
import { Section } from "./components/Section";
import { ContactBar } from "./components/ContactBar";

export default function App() {
    return (
        <div className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-10 backdrop-blur bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
                <div className="mx-auto max-w-3xl px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold">{resume.name}</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-3xl px-4 mt-4">
                <h2 className="text-2xl font-bold">{resume.title}</h2>
                <ContactBar />
            </div>

            {/* Main */}
            <main className="mx-auto max-w-3xl px-4 py-8 space-y-12">
                <Section id="summary" title="Professional Summary">
                    <p className="leading-relaxed">{resume.summary}</p>
                </Section>

                <Section id="skills" title="Core Skills">
                    <div className="flex flex-wrap gap-2">
                        {resume.skills.map((s) => (
                            <span
                                key={s}
                                className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-sm"
                            >
                {s}
              </span>
                        ))}
                    </div>
                </Section>

                <Section id="experience" title="Professional Experience">
                    <div className="space-y-6">
                        {resume.experience.map((job) => (
                            <article
                                key={job.role + job.company}
                                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4"
                            >
                                <header className="flex items-baseline justify-between gap-2">
                                    <h3 className="font-semibold">
                                        {job.role} — {job.company}
                                    </h3>
                                    <span className="text-sm opacity-70">{job.period}</span>
                                </header>
                                <ul className="mt-3 list-disc pl-5 space-y-1">
                                    {job.points.map((pt, i) => (
                                        <li key={i}>{pt}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="education" title="Education">
                    <ul className="space-y-3">
                        {resume.education.map((e) => (
                            <li key={e.title} className="flex items-baseline justify-between">
                                <span>{e.title}</span>
                                <span className="text-sm opacity-70">{e.year}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="projects" title="Projects">
                    <ul className="list-disc pl-5 space-y-2">
                        {resume.projects.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </Section>

                <Section id="extras" title="Extras">
                    <ul className="list-disc pl-5 space-y-2">
                        {resume.extras.map((x) => (
                            <li key={x}>{x}</li>
                        ))}
                    </ul>
                </Section>
            </main>

            {/* Footer */}
            <footer className="mx-auto max-w-3xl px-4 py-10 text-sm opacity-70 text-center border-t border-zinc-200 dark:border-zinc-800">
                © {new Date().getFullYear()} {resume.name}. All rights reserved.
            </footer>
        </div>
    );
}
