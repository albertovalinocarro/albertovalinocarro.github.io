import { useEffect, useState } from "react";

// Tracks which section is currently in view so the nav can highlight it.
// Pass every section on the page (not just the ones in the nav): otherwise the
// last nav section seen stays "active" while the reader is in a section the
// nav doesn't list, or back at the top of the page.
export function useScrollSpy(sectionIds: readonly string[]): string | null {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        // Sections currently inside the observed band. Several can be in it at
        // once (e.g. a short section, or a batch of entries on a fast scroll),
        // so pick the first one in page order rather than whichever entry the
        // observer happened to report last.
        const visible = new Set<string>();

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id);
                    else visible.delete(entry.target.id);
                }
                const first = sectionIds.find((id) => visible.has(id));
                // Keep the previous value while the band sits in a gap between
                // observed elements, so the highlight doesn't flicker.
                if (first) setActiveId(first);
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
