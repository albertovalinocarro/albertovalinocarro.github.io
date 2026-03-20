export const CV_VERSION = "2026-03-09-v1-ic-focus";

export const resume = {
    name: "Alberto Valiño Carro",
    title: "Senior Full-Stack Developer",
    email: "albertovcarro@gmail.com",

    labels: {
        summary: "Professional Summary",
        skills: "Core Skills",
        experience: "Professional Experience",
        education: "Academic Experience",
        projects: "Key Accomplishments",
        extras: "Additional Information",
        contact: "Get In Touch",
        contactNameLabel: "Name",
        contactEmailLabel: "Email",
        contactMessageLabel: "Message",
        contactNamePlaceholder: "Your name",
        contactEmailPlaceholder: "your@email.com",
        contactMessagePlaceholder: "Your message...",
        contactSend: "Send Message",
        contactSending: "Sending...",
        contactSuccess: "Message sent! I'll get back to you soon.",
        contactError: "Something went wrong. Please try again.",
    },

    summary:
        "Senior Full-Stack Developer with 8+ years writing production PHP (Laravel) and JavaScript (React). Hands-on throughout the full stack; schema design, query optimisation, REST API contracts, async job queues, and React component architecture. I own features end-to-end, debug deep in the stack, and leave code measurably better than I found it. Seeking a technically challenging full-stack remote role where I can contribute to long-term product success.",

    skills: [
        "PHP & Laravel",
        "Python & LangChain",
        "JavaScript / TypeScript",
        "React / Svelte / Next.js",
        "API Design & REST",
        "MySQL / PostgreSQL",
        "AWS & Cloud Architecture",
        "Docker & CI/CD",
        "System Design",
        "Performance & Optimisation",
        "LLM Integration & AI Workflows",
        "Clean Code & TDD",
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

    extras: [
        "Fluent in English & Spanish",
        "Mentor & team collaborator",
        "Interested in DevOps, AI, LLMs, Automation, Blockchain, and scalable architectures",
    ],

    socials: {
        email: "albertovcarro@gmail.com",
        github: "https://github.com/albertovalinocarro",
        location: "Dublin, Ireland / A Coruña, Spain",
        linkedin: "https://www.linkedin.com/in/alberto-valino-carr0/",
    },
};
