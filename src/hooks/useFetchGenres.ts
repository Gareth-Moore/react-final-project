// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { FetchGenresResponse, Genre } from "../types/interfaces";

import { Genre } from "../types/interfaces";
import useFetchData from "./useFetchData";

function useFetchGenres() {
  const { data, errors, isLoading } = useFetchData<Genre>("/genres");
  return { genres: data, errors, isLoading };
  //   const [genres, setGenres] = useState<Genre[]>([]);
  //   const [errors, setErrors] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  //   function fetchGenres() {
  //     if (prompt("type anything to run API")) {
  //       console.log("api called");
  //       setIsLoading(true);
  //       const response = apiClient
  //         .get<FetchGenresResponse>("/genres")
  //         .then((res) => {
  //           setIsLoading(false);
  //           setGenres(res.data.results);
  //         })
  //         .catch((err) => {
  //           setIsLoading(false);
  //           setErrors(err.message);
  //         });
  //     }
  //   }

  //   useEffect(() => {
  //     fetchGenres();
  //   }, []);

  //   return { genres, errors, isLoading, refetchGenres: fetchGenres };
}

export default useFetchGenres;
