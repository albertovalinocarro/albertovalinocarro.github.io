import type { Resume } from "./types";

export const resume: Resume = {
  name: "Alberto Valiño Carro",
  title: "Senior Full-Stack Developer",
  email: "albertovcarro@gmail.com",
  location: "Dublin, Ireland",
  labels: {
    summary: "Professional Summary",
    skills: "Core Skills",
    experience: "Professional Experience",
    education: "Education",
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
    heroTagline:
      "Nine years of production PHP at Three Ireland, from a large legacy codebase to leading its rebuild as a Laravel application on AWS. Hands-on from the database to the UI, and in the infrastructure underneath.",
    downloadCv: "Download CV (PDF)",
    terminalTitle: "Interactive Terminal",
    terminalHint: "Tab autocompletes",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
  },
  typingTitles: [
    "Senior Full-Stack Developer",
    "Laravel & React Developer",
    "PHP · Laravel · AWS",
    "Vue 3 · TypeScript · Laravel",
  ],
  summary:
    "Senior full-stack developer with nine years of production PHP and MySQL at Three Ireland, building applications used by more than 350 people across several companies. I currently lead the rebuild of a critical internal telecom platform as a Laravel application on AWS, hands-on across the architecture, the Terraform and the delivery. I work best on problems that start with evidence, such as a slow report, an intermittent bug or a data discrepancy, and end with a tested change that fixes the cause. Strong in Laravel, MySQL/MariaDB performance, REST APIs, queues, and React or Vue with TypeScript. Security-minded (UCD Cybersecurity Diploma) and using AI-assisted tools as part of my workflow. Looking for a remote, hands-on senior full-stack PHP role.",
  skills: [
    "PHP & Laravel",
    "JavaScript / TypeScript",
    "React / Next.js",
    "Vue 3",
    "Svelte 5 / SvelteKit 2",
    "API Design & REST",
    "MySQL / PostgreSQL / MariaDB",
    "Query Optimisation & Indexing",
    "Performance & Debugging",
    "Clean Code & TDD",
    "Security & Access Control",
    "Docker & CI/CD",
    "AWS & Terraform",
    "Python & LangChain",
    "LLM Integration & AI Workflows",
  ],
  skillGroups: [
    { label: "Backend", items: ["PHP", "Laravel", "Symfony", "Python", "REST APIs", "OpenAPI"] },
    { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "Svelte 5", "Vue 3", "Inertia.js"] },
    { label: "Databases", items: ["MySQL / MariaDB", "PostgreSQL", "Redis", "Query optimisation", "Indexing", "Data modelling"] },
    { label: "Cloud & Infrastructure", items: ["AWS", "Terraform (IaC)", "ECS Fargate", "RDS", "ElastiCache", "SQS", "KMS", "Secrets Manager"] },
    { label: "DevOps & CI/CD", items: ["Docker", "GitHub Actions", "CodePipeline / CodeBuild", "ECR", "tfsec / TFLint", "CloudWatch"] },
    { label: "Testing", items: ["PHPUnit", "TDD", "PR review standards"] },
    { label: "AI", items: ["LangChain", "LLM integration", "MCP servers", "AI-assisted development"] },
  ],
  experience: [
    {
      role: "Lead Developer, Platform Modernisation",
      company: "Three Ireland",
      period: "2025 – Present | Dublin, Ireland",
      points: [
        "Lead the rebuild of a critical internal telecom platform, relied on daily by 250+ users across several companies, from a raw-PHP application on a single server into a containerised Laravel 13 application on AWS. I own the architecture, the milestone plan, cost tracking and monthly reporting to senior management.",
        "Audited the legacy system before designing anything: 33 databases, 8,000+ tables, 350+ views and ~21,000 files. Documented its background jobs, integrations and critical security risks, and built the migration plan on that evidence.",
        "Designed the account and network model: production isolated in its own AWS account, layered networking with a data tier that has no route to the internet, and only anonymised data in non-production.",
        "Compute: ECS Fargate on ARM64, with one hardened, non-root image running five process types (web, Horizon workers, scheduler, migrations and one-off bootstrap tasks).",
        "Data: RDS MariaDB with direct TLS-verified connections and Redis with TLS and AUTH. Replaced a planned database proxy that added cost but no real security, cutting the projected monthly platform cost by about 10%.",
        "Security: customer-managed KMS keys, secrets injected at runtime and never baked into the image, separate database identities for application, migration and admin work, and least-privilege IAM.",
        "Wrote all infrastructure as reusable Terraform modules with remote state and locking. Every plan is reviewed line by line and scanned with tfsec and TFLint, with no high or critical findings.",
        "Built the AWS-native CI/CD pipeline (CodePipeline, CodeBuild on ARM64, ECR). Each image must pass 17 automated gates before it is published, is tagged immutably, and is built once and promoted between environments.",
        "Brought 15 manually created resources under Terraform without creating, destroying or disrupting any of them.",
        "Patched two critical PHP remote-code-execution vulnerabilities within 24 hours of the fix being released.",
        "Delivered the dev environment in November 2026; staging and production are planned for 2027.",
        "Keep an architecture decision record and a live project-state document as the single source of truth; work with InfoSec, platform architects and DevOps, and onboard a second maintainer.",
      ],
    },
    {
      role: "Full-Stack PHP Developer & DBA",
      company: "Three Ireland",
      period: "Jun 2020 – Present | Dublin, Ireland",
      points: [
        "Built the Laravel REST API behind a telecom asset-management platform with a Next.js front end: modelled complex asset hierarchies, removed N+1 queries and moved report generation to Redis-backed queues, cutting page loads by ~60%.",
        "Contributed to a cloud-based data platform for telecom asset management that enabled remote operations and reduced field intervention time by 30%.",
        "Built React and Laravel dashboards and internal tools used daily by around 100 people in different companies and roles, including executives; introduced TypeScript, component tests and a shared design system.",
        "Owned feature development across the Laravel + React stack: migrations, Eloquent models, service classes, queued jobs and React components, from spec to production.",
        "Built and maintained REST APIs with Laravel Sanctum authentication, role-based access via policies and gates, and rate limiting for third-party integrators.",
        "Moved high-volume reporting onto async job queues (Laravel Queues + SQS), decoupling slow work from HTTP requests and absorbing traffic spikes.",
        "Refactored legacy PHP step by step into testable, service-oriented Laravel code; introduced PHPUnit suites from near-zero coverage and PR review standards to keep it that way.",
        "Built Docker-based dev environments and GitHub Actions workflows for linting, testing and deployment.",
        "Reviewed code and paired with teammates; wrote the team's onboarding documentation.",
      ],
    },
    {
      role: "PHP Developer & Database Administrator",
      company: "Three Ireland",
      period: "Jul 2017 – Jun 2020 | Dublin, Ireland",
      points: [
        "Maintained and extended a large PHP, JavaScript and MySQL application relied on by 250+ users across several companies while it stayed in production.",
        "Diagnosed slow MySQL queries with EXPLAIN, composite indexes and query restructuring, resolving production performance incidents and cutting critical report times.",
        "Administered the MySQL/MariaDB databases: schema changes, data integrity and performance.",
      ],
    },
    {
      role: "Web Developer",
      company: "BEUTiFi.com",
      period: "Mar 2017 – Jul 2017 | Dublin, Ireland",
      points: [
        "Developed and maintained PHP/JS features for a beauty booking platform.",
      ],
    },
    {
      role: "Web Developer",
      company: "GAIA",
      period: "Sep 2015 – Feb 2016 | A Coruña, Spain",
      points: [
        "Full-stack PHP/JS development for client projects.",
      ],
    },
  ],
  education: [
    { title: "Diploma in Cybersecurity – University College Dublin", year: "2024" },
    { title: "Higher Vocational Diplomas (FP Grado Superior) in Multi-platform (DAM) and Web (DAW) Application Development – CPR A Fundación, A Coruña", year: "2013–2017" },
  ],
  projects: [
    "Leading the rebuild of a critical internal telecom platform as a Laravel 13 application on AWS, with the dev environment delivered in November 2026.",
    "Audited the legacy platform (33 databases, 8,000+ tables, ~21,000 files) before changing it, so the migration plan was based on what the system actually does.",
    "Wrote the full Terraform and the AWS-native CI/CD pipeline: the same modules for every environment, every change reviewed as a plan, and 17 automated gates before any image is published.",
    "Replaced a planned database proxy with direct TLS-verified connections, cutting the projected monthly platform cost by about 10% with no loss of security.",
    "Built the REST API behind a telecom asset-management platform: modelled complex asset hierarchies, removed N+1 queries and moved report generation to Redis-backed queues, cutting page loads by ~60%.",
    "Contributed to a cloud-based data platform for telecom asset management that enabled remote operations and reduced field intervention time by 30%.",
    "Modernised legacy PHP and JavaScript incrementally into Laravel and React while it stayed in production, raising test coverage from near zero.",
    "Delivered AWS-integrated dashboards and internal tools used daily by cross-functional teams, including executives.",
  ],
  personalProjects: [
    {
      name: "Trainer Tracker",
      url: "https://trainer-tracker.com",
      period: "Sep 2025 – Present",
      stack: ["SvelteKit 2", "Svelte 5", "Laravel 13", "PostgreSQL", "Redis", "Docker", "Railway"],
      summary: "Full-stack SaaS training log built solo from scratch. SSR frontend, REST API backend, deployed live on Railway EU West with CI/CD auto-deploy on push to main.",
      points: [
        "Dual-role system (Athlete / Coach) with pivot-table relationships — athletes manage workouts, measurements, templates and exercises; coaches get a read-only view of their athletes' data.",
        "Dashboard includes a GitHub-style annual training heatmap, weight/measurement progress charts, per-exercise strength progression tracking, and a live training streak calculator.",
        "Security: Sanctum token auth in httpOnly cookies, rate limiting, CORS locked to the production domain, 7-day token expiry with daily pruning, and Snyk dependency scanning.",
      ],
    },
    {
      name: "Job Tracker",
      url: "https://job-tracker-avc.vercel.app",
      period: "May 2026 – Present",
      stack: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "Supabase", "Tailwind CSS v4", "Vercel"],
      summary: "Full-stack job application tracker built with the Vue 3 Composition API, Pinia state management, and Supabase Auth with Row Level Security.",
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
      summary: "Multi-client webhook middleware focused on data integrity, modelled on real-world integration work.",
      points: [
        "Full async pipeline: HMAC-SHA256 webhook verification → idempotency check → Doctrine persist → Messenger dispatch → Redis queue → async worker → outbound WMS/ERP sync.",
        "Multi-client design using tagged Symfony services — new clients added by implementing one interface and one config entry, with no changes to core logic.",
        "Client-scoped REST API with Bearer token auth, filtering, pagination; console commands for status dashboard and failed event retry; structured Monolog logging with webhook_event_id and duration_ms per entry.",
      ],
    },
  ],
  extras: [
    "Fluent in English & Spanish",
    "Comfortable in distributed, fully remote, writing-first teams",
    "Infrastructure as code with Terraform — plan-and-review workflow, least-privilege IAM, secure-by-default AWS networking",
    "Building with MCP (Model Context Protocol) server integrations — connecting LLM tooling to real data sources (Google Drive, Gmail, Calendar) for agentic workflows",
    "Portfolio site built with React 19, TypeScript, Tailwind v4, Framer Motion, and LangChain/OpenAI",
  ],
  socials: {
    email: "albertovcarro@gmail.com",
    github: "https://github.com/albertovalinocarro",
    location: "Dublin, Ireland",
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