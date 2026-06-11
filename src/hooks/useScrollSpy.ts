import { useEffect, useState } from "react";

// Tracks which section is currently in view so the nav can highlight it.
export function useScrollSpy(sectionIds: string[]): string | null {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            // Trigger when a section crosses the upper-middle band of the viewport
            { rootMargin: "-20% 0px -70% 0px" }
        );

        for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        }

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
}
