import { useEffect, useState } from "react";

// Custom hook to track and update page views
export function usePageViews() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViews() {
      try {
        // Increment on load
        const res = await fetch("https://cv-translation-api.vercel.app/api/views", {
          method: "POST",
        });
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Failed to update views", err);
      }
    }
    fetchViews();
  }, []);

  return count;
}
