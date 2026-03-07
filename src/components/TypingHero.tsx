import { useEffect, useState } from "react";

const TITLES = [
    "Senior Full-Stack Developer",
    "Laravel & React Developer",
    "PHP & JavaScript Developer",
];

const TYPE_SPEED_MS = 60;
const DELETE_SPEED_MS = 35;
const PAUSE_AFTER_TYPE_MS = 1800;
const PAUSE_AFTER_DELETE_MS = 400;

export function TypingHero() {
    const [displayed, setDisplayed] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const id = setInterval(() => setCursorVisible((v) => !v), 530);
        return () => clearInterval(id);
    }, []);

    // Typewriter logic
    useEffect(() => {
        const target = TITLES[titleIndex];

        if (!isDeleting && displayed === target) {
            const id = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE_MS);
            return () => clearTimeout(id);
        }

        if (isDeleting && displayed === "") {
            const id = setTimeout(() => {
                setIsDeleting(false);
                setTitleIndex((i) => (i + 1) % TITLES.length);
            }, PAUSE_AFTER_DELETE_MS);
            return () => clearTimeout(id);
        }

        const delay = isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS;
        const id = setTimeout(() => {
            setDisplayed(isDeleting ? target.slice(0, displayed.length - 1) : target.slice(0, displayed.length + 1));
        }, delay);
        return () => clearTimeout(id);
    }, [displayed, isDeleting, titleIndex]);

    return (
        <h2 className="text-2xl font-bold" aria-label={TITLES[titleIndex]}>
            {displayed}
            <span
                aria-hidden="true"
                className={`inline-block w-0.5 h-6 ml-0.5 align-middle bg-indigo-500 rounded-sm transition-opacity duration-100 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                }`}
            />
        </h2>
    );
}
