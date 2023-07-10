import { Genre } from "../types/interfaces";
import useFetchData from "./useFetchData";

function useFetchGenres() {
  const { data, errors, isLoading } = useFetchData<Genre>("/genres");
  return { genres: data, errors, isLoading };
}

export default useFetchGenres;
