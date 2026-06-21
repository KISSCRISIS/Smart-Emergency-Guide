import { useState, useEffect } from "react";

// TODO: implement useProgress
export function useProgress() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch logic here
    setLoading(false);
  }, []);

  return { data, loading };
}
