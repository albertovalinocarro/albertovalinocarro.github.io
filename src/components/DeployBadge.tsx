import { useEffect, useState } from "react";

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
    <div className="text-sm opacity-70">
      - Last updated: {commit.date} (
      <a href={commit.url} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100">
        {commit.sha}
      </a>
      ) -
    </div>
  );
}
