import { useEffect, useState } from "react";

interface ViewCounts {
  total: number;
  unique: number;
}

// Hook to fetch and return page view counts
export function usePageViews() {
  const [views, setViews] = useState<ViewCounts | null>(null);

  useEffect(() => {
    async function fetchViews() {
      try {
        const res = await fetch("https://cv-translation-api.vercel.app/api/views", {
          method: "POST",
        });
        const data = await res.json();
        setViews(data);
      } catch (err) {
        console.error("Failed to update views", err);
      }
    }
    fetchViews();
  }, []);

  return views;
}
