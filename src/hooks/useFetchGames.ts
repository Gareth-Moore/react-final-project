import { Game, Genre, Platform } from "../types/interfaces";
import useFetchData from "./useFetchData";

const useFetchGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, errors, isLoading } = useFetchData<Game>(
    "/games",
    {
      //# params belongs to AxiosRequestConfig (see useFetchData.ts)
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    //# passing selected genre as array as 'dependencies' is expecting any[]
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games: data, errors, isLoading };
};

export default useFetchGames;
