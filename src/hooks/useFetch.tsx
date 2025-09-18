import { fetchApi } from "@/api";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url: string, options?: object) => {
  const [state, setState] = useState([]);
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
};

export default useFetch;
