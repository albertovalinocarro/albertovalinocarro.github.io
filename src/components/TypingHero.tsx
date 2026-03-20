import { useEffect, useState } from "react";

const TITLES = [
    "Senior Full-Stack Developer",
    "Senior Laravel & React Developer",
    "Senior PHP & JavaScript Developer",
];

const DISPLAY_MS  = 2800; // how long each title is fully visible
const FADE_OUT_MS =  500; // fade-out duration (matches CSS transition)

export function TypingHero() {
    const [index, setIndex]     = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => {
            // Fade out, then swap title and fade back in
            setVisible(false);
            setTimeout(() => {
                setIndex(i => (i + 1) % TITLES.length);
                setVisible(true);
            }, FADE_OUT_MS);
        }, DISPLAY_MS);
        return () => clearTimeout(id);
    }, [index]);

    return (
        <h2
            className="text-xl sm:text-2xl font-bold"
            aria-label={TITLES[index]}
            style={{
                opacity:    visible ? 1 : 0,
                transition: `opacity ${FADE_OUT_MS}ms ease`,
            }}
        >
            {TITLES[index]}
        </h2>
    );
}
