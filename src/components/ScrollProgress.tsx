import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

    return (
        <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent-500 dark:bg-accent-400"
            style={{ scaleX }}
        />
    );
}
