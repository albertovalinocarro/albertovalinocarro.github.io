import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const DEFAULT_TITLES = [
    "Senior Full-Stack PHP Developer",
    "Senior Laravel & React Developer",
    "Senior PHP & JavaScript Developer",
    "Senior Full-Stack Developer",
];

const TYPE_MS = 55;       // per character while typing
const DELETE_MS = 30;     // per character while deleting
const HOLD_MS = 2200;     // pause once a title is fully typed
const HOLD_EMPTY_MS = 350; // pause before typing the next title

export function TypingHero({ titles }: { titles?: string[] }) {
    const reducedMotion = useReducedMotion();
    const activeTitles = titles && titles.length > 0 ? titles : DEFAULT_TITLES;
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    // Restart cleanly when the titles change (e.g. language switch)
    const titlesKey = activeTitles.join("|");
    useEffect(() => {
        setIndex(0);
        setText("");
        setDeleting(false);
    }, [titlesKey]);

    useEffect(() => {
        if (reducedMotion) return;

        const title = activeTitles[index % activeTitles.length];
        let delay: number;

        if (!deleting && text === title) {
            delay = HOLD_MS;
        } else if (deleting && text === "") {
            delay = HOLD_EMPTY_MS;
        } else {
            delay = deleting ? DELETE_MS : TYPE_MS;
        }

        const id = setTimeout(() => {
            if (!deleting && text === title) {
                setDeleting(true);
            } else if (deleting && text === "") {
                setDeleting(false);
                setIndex(i => (i + 1) % activeTitles.length);
            } else {
                setText(deleting ? title.slice(0, text.length - 1) : title.slice(0, text.length + 1));
            }
        }, delay);

        return () => clearTimeout(id);
    }, [text, deleting, index, reducedMotion, activeTitles]);

    // Static title for users who prefer reduced motion
    if (reducedMotion) {
        return (
            <p className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
                {activeTitles[activeTitles.length - 1]}
            </p>
        );
    }

    return (
        // Fixed height so the layout never shifts while typing/deleting
        <p
            className="text-xl sm:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 h-[1.5em]"
            aria-label={activeTitles[index % activeTitles.length]}
        >
            <span aria-hidden="true" className="font-mono text-accent-500 dark:text-accent-400">$ </span>
            <span aria-hidden="true">{text}</span>
            <span
                aria-hidden="true"
                className="terminal-cursor inline-block w-[0.5em] h-[1.1em] ml-0.5 bg-accent-500 dark:bg-accent-400 align-text-bottom"
            />
        </p>
    );
}
