// ─── Terminal command logic ──────────────────────────────────────────────────
// Pure data + functions, kept out of Terminal.tsx so the component file only
// exports a component (react-refresh) and so this logic is unit-testable.

// ─── Output line model ────────────────────────────────────────────────────────
export type LineType = "input" | "output" | "error" | "success" | "blank";
export interface OutputLine {
    text: string;
    type: LineType;
}

// ─── Command definitions ──────────────────────────────────────────────────────
// All command output is defined as static string arrays.
// Nothing here is ever eval'd or injected into the DOM as HTML.
export const COMMAND_MAP: Record<string, () => OutputLine[]> = {
    help: () => [
        { text: "Available commands:", type: "output" },
        { text: "  whoami     - about Alberto", type: "output" },
        { text: "  skills     - tech stack by category", type: "output" },
        { text: "  experience - Three Ireland role summary", type: "output" },
        { text: "  projects   - personal projects", type: "output" },
        { text: "  contact    - email, LinkedIn, GitHub", type: "output" },
        { text: "  clear      - clear the terminal", type: "output" },
        { text: "  help       - show this message", type: "output" },
    ],

    whoami: () => [
        { text: "Alberto Valiño Carro - Senior Full-Stack Developer", type: "success" },
        { text: "", type: "blank" },
        { text: "8+ years writing production PHP (Laravel) and JavaScript (React)", type: "output" },
        { text: "at Three Ireland. Hands-on from schema design to React components -", type: "output" },
        { text: "I own features end-to-end, debug deep in the stack, and leave code", type: "output" },
        { text: "measurably better than I found it.", type: "output" },
        { text: "", type: "blank" },
        { text: "Based in Dublin, Ireland. Open to remote roles.", type: "output" },
    ],

    skills: () => [
        { text: "Backend     PHP · Laravel · Python · REST APIs · OpenAPI", type: "output" },
        { text: "Frontend    JavaScript · TypeScript · React · Svelte · Next.js", type: "output" },
        { text: "Databases   MySQL · PostgreSQL · query optimisation · indexing", type: "output" },
        { text: "Cloud       AWS (EC2, S3, SQS, RDS, CloudWatch, IAM)", type: "output" },
        { text: "DevOps      Docker · GitHub Actions · CI/CD · blue-green deploys", type: "output" },
        { text: "Testing     PHPUnit · TDD · PR review standards", type: "output" },
        { text: "AI          LangChain · LLM integration · AI workflows", type: "output" },
    ],

    experience: () => [
        { text: "Three Ireland - Senior Full-Stack Developer (2017 – Present)", type: "success" },
        { text: "", type: "blank" },
        { text: "• Full-stack ownership: migrations, Eloquent, service classes,", type: "output" },
        { text: "  queued jobs, and React components from spec to production.", type: "output" },
        { text: "• Refactored legacy PHP into testable Laravel; built PHPUnit", type: "output" },
        { text: "  suites from near-zero coverage.", type: "output" },
        { text: "• RESTful APIs with versioned endpoints, OpenAPI docs, Sanctum auth.", type: "output" },
        { text: "• Laravel Queues + SQS pipelines for high-volume async reporting.", type: "output" },
        { text: "• Resolved perf incidents via EXPLAIN, composite indexes.", type: "output" },
        { text: "• GitHub Actions + blue-green AWS EC2 deployments.", type: "output" },
        { text: "• Mentored juniors via code review, pairing, and onboarding docs.", type: "output" },
    ],

    contact: () => [
        { text: "Email     albertovcarro@gmail.com", type: "output" },
        { text: "LinkedIn  https://www.linkedin.com/in/alberto-valino-carr0/", type: "output" },
        { text: "GitHub    https://github.com/albertovalinocarro", type: "output" },
        { text: "Location  Dublin, Ireland / A Coruña, Spain", type: "output" },
    ],

    ls: () => [
        { text: "drwxr-xr-x  experience/    skills.txt    projects/", type: "output" },
        { text: "-rw-r--r--  resume.pdf     contact.txt   .hidden_talents", type: "output" },
    ],

    pwd: () => [{ text: "/home/guest/alberto-portfolio", type: "output" }],

    projects: () => [
        { text: "Trainer Tracker  →  trainer-tracker.com", type: "success" },
        { text: "", type: "blank" },
        { text: "  Full-stack SaaS training log, built solo from scratch.", type: "output" },
        { text: "  SvelteKit 2 + Svelte 5 (SSR) · Laravel 12 REST API", type: "output" },
        { text: "  PostgreSQL · Redis · Docker · Railway EU West · Cloudflare", type: "output" },
        { text: "", type: "blank" },
        { text: "  • Athlete/Coach dual-role system with pivot-table relationships", type: "output" },
        { text: "  • GitHub-style annual heatmap, progress charts, streak tracking", type: "output" },
        { text: "  • Sanctum token auth · rate limiting · Snyk · CI/CD auto-deploy", type: "output" },
        { text: "", type: "blank" },
        { text: "SyncBridge  →  github.com/albertovalinocarro", type: "success" },
        { text: "", type: "blank" },
        { text: "  Symfony 7.4 middleware: webhook ingestion, async Messenger", type: "output" },
        { text: "  workers, and a REST API layer.", type: "output" },
    ],
};

// ─── Command processor ────────────────────────────────────────────────────────
// Returns output lines for a given raw input string.
// The return value is ALWAYS static string data — no user input is ever
// interpolated into positions that could affect rendering behaviour.
// React renders all text as plain text nodes, so there is no HTML injection risk.
export function processCommand(raw: string): OutputLine[] | "clear" {
    const trimmed = raw.trim();

    if (trimmed === "") return [];

    // Easter egg — checked on the trimmed, lowercased string
    if (trimmed.toLowerCase() === "sudo hire alberto") {
        return [
            { text: "[sudo] password for recruiter: ••••••••", type: "output" },
            { text: "Authenticating...", type: "output" },
            { text: "✓ Credentials accepted. Excellent taste confirmed.", type: "success" },
            { text: "✓ Initiating hire sequence...", type: "success" },
            { text: "→ Drop a line: albertovcarro@gmail.com", type: "success" },
        ];
    }

    const cmd = trimmed.toLowerCase();

    if (cmd === "clear") return "clear";

    // More easter eggs
    if (cmd === "cat resume.pdf") {
        return [
            { text: "resume.pdf: binary file — but you're already reading the source.", type: "output" },
            { text: "Tip: use the “Download CV (PDF)” button at the top instead.", type: "success" },
        ];
    }
    if (cmd === "cat .hidden_talents") {
        return [
            { text: "• Debugging production at 2am without breaking a sweat", type: "output" },
            { text: "• Explaining EXPLAIN plans to non-believers", type: "output" },
            { text: "• Making legacy PHP testable (yes, really)", type: "output" },
        ];
    }
    if (cmd === "vim" || cmd === "vi" || cmd === "nano" || cmd === "emacs") {
        return [
            { text: `${cmd}: opening editor...`, type: "output" },
            { text: "Just kidding. You'd never escape. :q! yourself to safety.", type: "error" },
        ];
    }
    if (cmd === "exit" || cmd === "logout") {
        return [{ text: "Nice try. The only way out is to hire Alberto.", type: "success" }];
    }

    const handler = COMMAND_MAP[cmd];
    if (handler) return handler();

    // "not found" message: show the trimmed original input, not the lowercased
    // version, so casing is preserved for the user — still rendered as text, safe.
    return [
        { text: `command not found: ${trimmed}`, type: "error" },
        { text: "Type 'help' for available commands.", type: "error" },
    ];
}

