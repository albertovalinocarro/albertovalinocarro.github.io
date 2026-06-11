import { useState, useRef, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { COMMAND_MAP, processCommand } from "../lib/terminalCommands";
import type { LineType, OutputLine } from "../lib/terminalCommands";

// ─── Security limits ──────────────────────────────────────────────────────────
// These prevent memory/layout DoS from rapid input or long strings.
const MAX_INPUT_LENGTH = 200;   // enforced on the <input> element
const MAX_HISTORY_SIZE = 50;    // command history ring buffer
const MAX_OUTPUT_LINES = 300;   // cap scrollback buffer

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

        if (e.key === "Tab") {
            e.preventDefault();
            const prefix = input.trimStart().toLowerCase();
            if (prefix === "") return;

            const candidates = [...Object.keys(COMMAND_MAP), "clear"]
                .filter((c) => c.startsWith(prefix))
                .sort();

            if (candidates.length === 1) {
                setInput(candidates[0]);
            } else if (candidates.length > 1) {
                // Show the options, like a real shell does
                setLines((prev) =>
                    [
                        ...prev,
                        { text: `$ ${input}`, type: "input" as LineType },
                        { text: candidates.join("    "), type: "output" as LineType },
                    ].slice(-MAX_OUTPUT_LINES)
                );
            }
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