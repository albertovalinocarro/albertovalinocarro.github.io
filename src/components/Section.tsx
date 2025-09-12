import type {ReactNode} from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
    return (
        <section id={id} className="scroll-mt-24">
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            {children}
        </section>
    );
}
