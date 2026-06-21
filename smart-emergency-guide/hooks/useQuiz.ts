import { useState, useEffect } from "react";

// TODO: implement useQuiz
export function useQuiz() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch logic here
    setLoading(false);
  }, []);

  return { data, loading };
}
