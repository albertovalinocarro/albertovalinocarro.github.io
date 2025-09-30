import { useEffect, useState } from "react";
import { GitCommit } from "lucide-react";

interface CommitInfo {
  date: string;
  sha: string;
  url: string;
}

export function DeployBadge() {
  const [commit, setCommit] = useState<CommitInfo | null>(null);

  useEffect(() => {
    async function fetchCommit() {
      try {
        const res = await fetch("https://cv-translation-api.vercel.app/api/deploy-info");
        if (!res.ok) throw new Error("Failed to fetch commit");
        const data = await res.json();
        setCommit(data);
      } catch (err) {
        console.error("Error fetching commit info", err);
      }
    }
    fetchCommit();
  }, []);

  if (!commit) return null;

  return (
    <div className="flex items-center gap-2 text-sm opacity-80">
       <GitCommit size={16} className="text-zinc-600 dark:text-zinc-300 hover:text-indigo-500" />
      Last updated: {commit.date} (
      <a href={commit.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
        {commit.sha}
      </a> 
      )
    </div>
  );
}
