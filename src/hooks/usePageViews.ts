import { useEffect, useState } from "react";
import { ENDPOINTS } from "../lib/api";

interface ViewCounts {
  total: number;
  unique: number;
}

// Hook to fetch and return page view counts.
// A sessionStorage guard ensures each browser session is counted once,
// so reloads (and dev hot-reloads) don't inflate the numbers.
export function usePageViews() {
  const [views, setViews] = useState<ViewCounts | null>(null);

  useEffect(() => {
    async function fetchViews() {
      try {
        const counted = sessionStorage.getItem("views_counted") === "1";
        const res = await fetch(ENDPOINTS.views, {
          method: counted ? "GET" : "POST",
        });
        // A failed response (e.g. 429/500) carries an error body, not counts —
        // don't mark the session as counted or render it.
        if (!res.ok) throw new Error(`Views request failed: ${res.status}`);
        const data = await res.json();
        if (
          typeof data?.total !== "number" ||
          typeof data?.unique !== "number"
        ) {
          throw new Error("Unexpected views response shape");
        }
        if (!counted) sessionStorage.setItem("views_counted", "1");
        setViews(data);
      } catch (err) {
        console.error("Failed to update views", err);
      }
    }
    fetchViews();
  }, []);

  return views;
}
