import { motion } from "framer-motion";

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3">{children}</div>
    </motion.section>
  );
}
