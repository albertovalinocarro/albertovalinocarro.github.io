import { useState } from "react";
import type { ReactNode } from "react";

// Tooltip component
export function Tooltip({ children, text }: { children: ReactNode; text: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onClick={() => setVisible((v) => !v)} // toggle on tap
      onMouseLeave={() => setVisible(false)} // reset when moving away (desktop)
    >
      {children}
      <span
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-full mb-1
          whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white
          dark:bg-zinc-200 dark:text-zinc-900 shadow-lg
          transition-all duration-200 ease-out pointer-events-none
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
        {text}
      </span>
    </span>
  );
}
