import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";

// ─── Security limits ──────────────────────────────────────────────────────────
// These prevent memory/layout DoS from rapid input or long strings.
const MAX_INPUT_LENGTH = 200;   // enforced on the <input> element
const MAX_HISTORY_SIZE = 50;    // command history ring buffer
const MAX_OUTPUT_LINES = 300;   // cap scrollback buffer

// ─── Output line model ────────────────────────────────────────────────────────
type LineType = "input" | "output" | "error" | "success" | "blank";
interface OutputLine {
    text: string;
    type: LineType;
}

// ─── Command definitions ──────────────────────────────────────────────────────
// All command output is defined as static string arrays.
// Nothing here is ever eval'd or injected into the DOM as HTML.
const COMMAND_MAP: Record<string, () => OutputLine[]> = {
    help: () => [
        { text: "Available commands:", type: "output" },
        { text: "  whoami - about Alberto", type: "output" },
        { text: "  skills - tech stack by category", type: "output" },
        { text: "  experience - Three Ireland role summary", type: "output" },
        { text: "  contact - email, LinkedIn, GitHub", type: "output" },
        { text: "  clear - clear the terminal", type: "output" },
        { text: "  help - show this message", type: "output" },
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
};

// ─── Command processor ────────────────────────────────────────────────────────
// Returns output lines for a given raw input string.
// The return value is ALWAYS static string data — no user input is ever
// interpolated into positions that could affect rendering behaviour.
// React renders all text as plain text nodes, so there is no HTML injection risk.
function processCommand(raw: string): OutputLine[] | "clear" {
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

    const handler = COMMAND_MAP[cmd];
    if (handler) return handler();

    // "not found" message: show the trimmed original input, not the lowercased
    // version, so casing is preserved for the user — still rendered as text, safe.
    return [
        { text: `command not found: ${trimmed}`, type: "error" },
        { text: "Type 'help' for available commands.", type: "error" },
    ];
}

// ─── Component ────────────────────────────────────────────────────────────────
const WELCOME: OutputLine[] = [
    { text: "Welcome to Alberto's terminal. Type 'help' to get started.", type: "success" },
];

export function Terminal() {
    const [lines, setLines] = useState<OutputLine[]>(WELCOME);
    const [input, setInput] = useState("");
    // Command history: most-recent first
    const [cmdHistory, setCmdHistory] = useState<string[]>([]);
    // -1 = current input, 0 = most recent history entry
    const [historyIdx, setHistoryIdx] = useState(-1);
    // Stash current input while navigating history
    const inputStash = useRef("");

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Scroll the terminal's own container to the bottom — uses scrollTop so
    // the page viewport is never affected.
    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [lines]);

    function submit() {
        const result = processCommand(input);

        // Record non-empty, non-duplicate commands in history
        const trimmed = input.trim();
        if (trimmed && trimmed !== cmdHistory[0]) {
            setCmdHistory((h) => [trimmed, ...h].slice(0, MAX_HISTORY_SIZE));
        }

        setHistoryIdx(-1);
        inputStash.current = "";

        if (result === "clear") {
            setLines([]);
            setInput("");
            return;
        }

        const echoLine: OutputLine = { text: `$ ${input}`, type: "input" };
        setLines((prev) =>
            [...prev, echoLine, ...result].slice(-MAX_OUTPUT_LINES)
        );
        setInput("");
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            submit();
            return;
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cmdHistory.length === 0) return;
            if (historyIdx === -1) {
                // Stash whatever is currently typed before navigating
                inputStash.current = input;
            }
            const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
            setHistoryIdx(next);
            setInput(cmdHistory[next]);
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIdx === -1) return;
            const next = historyIdx - 1;
            setHistoryIdx(next);
            setInput(next === -1 ? inputStash.current : cmdHistory[next]);
        }
    }

    const lineStyles: Record<LineType, string> = {
        input:   "text-zinc-300",
        output:  "text-green-400",
        error:   "text-red-400",
        success: "text-yellow-300",
        blank:   "",
    };

    return (
        <div
            className="rounded-xl overflow-hidden border border-zinc-700 shadow-xl font-mono text-sm cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Title bar */}
            <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2 select-none">
                <span className="h-3 w-3 rounded-full bg-red-500 opacity-90" />
                <span className="h-3 w-3 rounded-full bg-yellow-400 opacity-90" />
                <span className="h-3 w-3 rounded-full bg-green-500 opacity-90" />
                <span className="ml-3 text-zinc-400 text-xs">guest@alberto-portfolio:~</span>
            </div>

            {/* Scrollback area */}
            <div className="relative">
              <div ref={scrollRef} className="bg-zinc-950 p-4 min-h-[300px] h-80 overflow-y-auto" role="log" aria-live="polite" aria-label="Terminal output">
                {lines.map((line, i) => (
                    <div
                        key={i}
                        // break-all prevents extremely long unspaced strings from
                        // overflowing the container (layout DoS mitigation).
                        className={`leading-relaxed whitespace-pre-wrap break-all ${lineStyles[line.type]}`}
                    >
                        {/* Text is a plain React text node — React escapes all
                            content, so no XSS or HTML injection is possible here. */}
                        {line.type === "blank" ? "\u00A0" : line.text}
                    </div>
                ))}
              </div>

              {/* Scanline overlay — purely decorative, pointer-events disabled */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
                }}
              />
            </div>

            {/* Input row */}
            <div className="bg-zinc-950 border-t border-zinc-800 px-4 py-2.5 flex items-center gap-2">
                <span className="text-green-500 select-none" aria-hidden="true">$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    // maxLength is the primary guard against oversized inputs hitting
                    // the state + render pipeline.
                    maxLength={MAX_INPUT_LENGTH}
                    className="flex-1 bg-transparent text-green-300 outline-none caret-transparent placeholder-zinc-600"
                    placeholder="type a command and press Enter…"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-label="Terminal command input"
                />
                {/* Blinking block cursor — replaces the native caret */}
                <span
                    aria-hidden="true"
                    className="terminal-cursor inline-block w-[0.5em] h-[1em] bg-green-400 align-text-bottom"
                />
            </div>
        </div>
    );
}
