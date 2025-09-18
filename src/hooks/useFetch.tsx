import { fetchApi } from "@/api";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url: string, options?: object) => {
  const [state, setState] = useState([]);

  const handleFetch = useCallback(async () => {
    const users = await fetchApi(url, options);
    setState(users);
  }, [url, options]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return { state };
};

export default useFetch;
