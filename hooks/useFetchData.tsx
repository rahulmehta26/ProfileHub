// FETCH DATA

import { useState, useEffect } from "react";

interface ApiResponse {}

const useFetchData = () => {
  const [data, setData] = useState<ApiResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("API DATA");
        // ADD TOAST ANDROID NOTIFICATION
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        // ADD TOAST ANDROID NOTIFICATION
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;
