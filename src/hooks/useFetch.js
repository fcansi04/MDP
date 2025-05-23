import { useState, useEffect } from "react";

const useFetch = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = async () => {
    setLoading(true);
    try {
      const corsProxy = "https://api.allorigins.win/raw?url=";
      const targetUrl = "https://cdn.oneri.io/web-team/case/spotify.json";
      const response = await fetch(corsProxy + encodeURIComponent(targetUrl), {
        headers: {
          Origin: "https://mdp-fci4.vercel.app/",
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
