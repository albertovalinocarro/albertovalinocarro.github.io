import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  index?: number;
}

export function Section({ id, title, children, index = 0 }: SectionProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      id={id}
      className={[
        "border-t border-[#e5e5e5] dark:border-zinc-700",
        isEven
          ? "bg-white dark:bg-zinc-900"
          : "bg-[#f7f7f8] dark:bg-zinc-800/40",
      ].join(" ")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-3xl px-4 py-[90px]">
        <h2 className="text-xl font-semibold tracking-tight mt-2 mb-6">{title}</h2>
        <div className="space-y-3">{children}</div>
      </div>
    </motion.section>
  );
}
