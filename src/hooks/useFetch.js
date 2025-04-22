import { useState, useEffect } from "react";

const useFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setLoading(true);
    try {
      const corsProxy = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = "https://cdn.oneri.io/web-team/case/spotify.json";
      const response = await fetch(corsProxy + targetUrl, {
        headers: {
          Origin: "http://localhost:5174",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setFetchData(result);
      setError(null);
    } catch (err) {
      setError(err.message || "Veri çekme hatası");
      setFetchData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { fetchData, loading, error, refetch };
};

export default useFetch;
