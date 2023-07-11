import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FetchResponse } from "../types/interfaces";
import { AxiosRequestConfig } from "axios";

//! AxiosRequestConfig is adding a search parameter (as passed from useFetchGames.ts)
//* See dependencies below (useEffect dependencies) // deps for short
function useFetchData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[] | null
) {
  const [data, setData] = useState<T[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function fetchData() {
    // if (prompt("type anything to run API")) {
    //   console.log("api called");
    setIsLoading(true);
    apiClient
      // adding the query parameters {...requestConfig}
      .get<FetchResponse<T>>(endpoint, { ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setIsLoading(false);
      });
    // }
  }

  useEffect(
    () => {
      fetchData();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, errors, refetchData: fetchData, isLoading };
}

export default useFetchData;
