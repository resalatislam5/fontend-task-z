import { fetchApi } from "@/api";
import { useCallback, useEffect, useState } from "react";

function useFetch<T>(url: string, options?: object) {
  const [state, setState] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);
  const handleFetch = useCallback(async () => {
    try {
      const users = await fetchApi(url, options);
      setState(users);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return { state, isLoading };
}

export default useFetch;
