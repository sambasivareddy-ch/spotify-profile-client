import { useState, useEffect } from 'react';

function useFetch<T>(baseUrl: string, id = null) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = id ? `${baseUrl}/${id}` : baseUrl;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
            method: "GET",
            credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, id]);

  return { data, loading, error };
};

export default useFetch;
