import { Info } from "lucide-react";
import { Tooltip } from "./Tooltip";
import { usePageViews } from "../hooks/usePageViews";
import { DeployBadge } from "./DeployBadge";

// Footer component
function Footer({ currentResume }: { currentResume: any }) {
  const views = usePageViews();

  return (
    <footer className="mx-auto max-w-3xl px-4 py-8 text-sm border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left opacity-80">
        {/* Deploy badge */}
        <DeployBadge />

        {/* Visitor counters */}
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            👀 {views?.total ?? "..."}
            <Tooltip text="Total page loads, including repeat visits">
              <Info size={14} className="opacity-70 cursor-help" />
            </Tooltip>
          </span>
          |
          <span className="flex items-center gap-1">
            🧑‍💻 {views?.unique ?? "..."}
            <Tooltip text="Unique visitors (per device/browser)">
              <Info size={14} className="opacity-70 cursor-help" />
            </Tooltip>
          </span>
        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} {currentResume.name}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
