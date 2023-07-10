import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchResponse } from "../types/interfaces";

function useFetchData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    if (prompt("type anything to run API")) {
      console.log("api called");
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint)
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrors(err.message);
          setIsLoading(false);
        });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, errors, refetchData: fetchData, isLoading };
}

export default useFetchData;
