import useFetchGenres from "../../hooks/useFetchGenres";

const GenreList = () => {
  const { genres, errors, isLoading, refetchGenres } = useFetchGenres();
  return (
    <ul>
      {genres && genres.map((value) => <li key={value.id}>{value.name}</li>)}
    </ul>
  );
};

export default GenreList;
