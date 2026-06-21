import { useState, useEffect } from "react";

// TODO: implement useUser
export function useUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch logic here
    setLoading(false);
  }, []);

  return { data, loading };
}
