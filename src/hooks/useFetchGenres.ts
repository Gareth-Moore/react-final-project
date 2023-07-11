import genres from "../data/genres";

// function useFetchGenres() {
//   const { data, errors, isLoading } = useFetchData<Genre>("/genres");
//   return { genres: data, errors, isLoading };
// }

// when hook was in use, it has been deactived below
// const useFetchGenres = () => useFetchData<Genre>("/genres");

const useFetchGenres = () => ({ data: genres, isLoading: false, errors: null });

export default useFetchGenres;
