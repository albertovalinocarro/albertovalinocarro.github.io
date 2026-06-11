import type { Resume } from "./types";

export const resume: Resume = {
    name: "Alberto Valiño Carro",
    title: "Senior Full-Stack PHP Developer",
    email: "albertovcarro@gmail.com",
    location: "Dublin, Ireland / A Coruña, Spain",

    labels: {
        summary: "Professional Summary",
        skills: "Core Skills",
        experience: "Professional Experience",
        education: "Academic Experience",
        projects: "Key Accomplishments",
        personalProjects: "Personal Projects",
        extras: "Additional Information",
        contact: "Get In Touch",
        contactNameLabel: "Name",
        contactNamePlaceholder: "Your name",
        contactEmailLabel: "Email",
        contactEmailPlaceholder: "your@email.com",
        contactMessageLabel: "Message",
        contactMessagePlaceholder: "Your message...",
        contactSend: "Send Message",
        contactSending: "Sending...",
        contactSuccess: "Message sent! I'll get back to you soon.",
        contactError: "Something went wrong. Please try again or email me directly.",
    },

    summary:
        "Senior Full-Stack Developer with 8+ years writing production PHP (Laravel) and JavaScript (React). Hands-on throughout the full stack; schema design, query optimisation, REST API contracts, async job queues, and React component architecture. I own features end-to-end, debug deep in the stack, and leave code measurably better than I found it. Seeking a technically challenging full-stack remote role where I can contribute to long-term product success.",

    skills: [
        "PHP & Laravel",
        "Python & LangChain",
        "JavaScript / TypeScript",
        "React / Next.js",
        "Svelte 5 / SvelteKit 2",
        "Vue 3",
        "API Design & REST",
        "MySQL / PostgreSQL",
        "AWS & Cloud Architecture",
        "Docker & CI/CD",
        "System Design",
        "Performance & Optimisation",
        "LLM Integration & AI Workflows",
        "Clean Code & TDD",
    ],

    skillGroups: [
        { label: "Backend", items: ["PHP", "Laravel", "Symfony", "Python", "REST APIs", "OpenAPI"] },
        { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte 5", "Vue 3"] },
        { label: "Databases", items: ["MySQL", "PostgreSQL", "Redis", "Query optimisation", "Indexing"] },
        { label: "Cloud & DevOps", items: ["AWS (EC2, S3, SQS, RDS)", "Docker", "GitHub Actions", "CI/CD", "Blue-green deploys"] },
        { label: "Testing", items: ["PHPUnit", "TDD", "PR review standards"] },
        { label: "AI", items: ["LangChain", "LLM integration", "MCP servers", "AI workflows"] },
    ],

    experience: [
        {
            role: "Senior Full-Stack Software Developer",
            company: "Three.ie",
            period: "2017 – Present | Dublin, Ireland",
            points: [
                "Owned feature development across the full Laravel + React stack. Writing migrations, Eloquent models, service classes, queued jobs, and React components from spec to production.",
                "Refactored legacy spaghetti PHP into testable service-oriented Laravel code; introduced PHPUnit test suites from near-zero coverage and enforced PR review standards.",
                "Built and maintained RESTful APIs with versioned endpoints and OpenAPI docs; handled auth via Laravel Sanctum.",
                "Engineered async job queues (Laravel Queues + SQS) for high-volume reporting, decoupling slow operations from HTTP requests and handling traffic spikes gracefully.",
                "Optimised slow MySQL queries using EXPLAIN, composite indexes, and query restructuring. Resolving production performance incidents and reducing critical report query times significantly.",
                "Delivered React frontend features with TypeScript and hooks; improved component reusability and reduced regression bugs.",
                "Built Docker-based dev environments mirroring production and authored GitHub Actions workflows for linting, testing, and blue-green deployments to AWS EC2.",
                "Mentored junior developers through code review, pair programming, and onboarding docs.",
            ],
        },
        {
            role: "Web Developer",
            company: "BEUTiFi.com",
            period: "Mar 2017 – Jul 2017 | Dublin, Ireland",
            points: [
                "Developed and maintained PHP/JS features for beauty booking platform.",
            ],
        },
        {
            role: "Web Developer",
            company: "GAIA",
            period: "Sep 2015 – Feb 2016 | A Coruña, Spain",
            points: [
                "Full-stack support for client projects.",
            ],
        },
    ],

    education: [
        { title: "Diploma in Cybersecurity – UCD Dublin", year: "2024" },
        { title: "BSc in Software Development", year: "2013–2017" },
    ],

    projects: [
        "Led the development of a cloud-based data platform for telecom asset management, enabling remote operations and reducing field intervention time by 30%.",
        "Built tailored web applications for business-specific workflows, increasing non-technical user adoption.",
        "Modernised legacy PHP and JavaScript systems by refactoring them into a scalable Laravel and React architecture, significantly improving maintainability and test coverage.",
        "Spearheaded the migration to AWS (S3, SQS, RDS, EC2, IAM, CloudWatch) and GitHub, streamlining CI/CD and strengthening security practices.",
        "Delivered AWS-integrated SaaS tools and dashboards used by cross-functional teams, including executives.",
    ],

    personalProjects: [
        {
            name: "Trainer Tracker",
            url: "https://trainer-tracker.com",
            period: "Sep 2025 – Present",
            stack: ["SvelteKit 2", "Svelte 5", "Laravel 12", "PostgreSQL", "Redis", "Docker", "Railway"],
            summary: "Full-stack SaaS training log built solo from scratch. SSR frontend, REST API backend, deployed live on Railway EU West with CI/CD auto-deploy on push to main.",
            points: [
                "Dual-role system (Athlete / Coach) with pivot-table relationships — athletes manage workouts, measurements, templates and exercises; coaches get a read-only view of their athletes' data.",
                "Dashboard includes a GitHub-style annual training heatmap, weight/measurement progress charts, per-exercise strength progression tracking, and a live training streak calculator.",
                "Production-grade security: Sanctum token auth in httpOnly cookies, rate limiting, CORS locked to production domain, 7-day token expiry with daily pruning, and Snyk dependency scanning.",
            ],
        },
        {
            name: "Job Tracker",
            url: "https://job-tracker-avc.vercel.app",
            period: "May 2026 – Present",
            stack: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Supabase", "Tailwind CSS v4", "Vercel"],
            summary: "Full-stack job application tracking SaaS built to demonstrate Vue 3 Composition API, Pinia state management, and Supabase Auth with Row Level Security.",
            points: [
                "Composition API throughout — ref, reactive, computed, watch, onMounted used across stores and views.",
                "Pinia stores for auth, applications, and companies with async Supabase actions and optimistic local state updates.",
                "Vue Router with navigation guards, lazy-loaded routes, and dynamic params; Supabase Auth with per-user RLS policies.",
            ],
        },
        {
            name: "SyncBridge",
            url: "https://github.com/albertovalinocarro/sync_bridge",
            period: "2025 – Present",
            stack: ["Symfony 7.4", "PHP 8.2", "Messenger", "Redis", "MySQL", "Docker", "PHPUnit"],
            summary: "Production-grade multi-client webhook middleware platform mirroring real-world integration architecture.",
            points: [
                "Full async pipeline: HMAC-SHA256 webhook verification → idempotency check → Doctrine persist → Messenger dispatch → Redis queue → async worker → outbound WMS/ERP sync.",
                "Multi-client architecture using tagged Symfony services — new clients added by implementing one interface and one config entry, zero changes to core logic.",
                "Client-scoped REST API with Bearer token auth, filtering, pagination; console commands for status dashboard and failed event retry; structured Monolog logging with webhook_event_id and duration_ms per entry.",
            ],
        },
    ],

    extras: [
        "Fluent in English & Spanish",
        "Mentor & team collaborator",
        "Building with MCP (Model Context Protocol) server integrations — connecting LLM tooling to real data sources (Google Drive, Gmail, Calendar) for agentic workflows",
        "Portfolio site built with React 19, TypeScript, Tailwind v4, Framer Motion, and LangChain/OpenAI",
    ],

    socials: {
        email: "albertovcarro@gmail.com",
        github: "https://github.com/albertovalinocarro",
        location: "Dublin, Ireland / A Coruña, Spain",
        linkedin: "https://www.linkedin.com/in/alberto-valino-carr0/",
    },
};

// Cache-busting version for the translated resume stored in localStorage.
// Derived from the resume content itself (djb2 hash), so any edit to the data
// above automatically invalidates stale cached translations — no manual bumps.
export function hashContent(input: string): string {
    let hash = 5381;
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) + hash + input.charCodeAt(i)) >>> 0;
    }
    return hash.toString(36);
}

export const CV_VERSION = hashContent(JSON.stringify(resume));