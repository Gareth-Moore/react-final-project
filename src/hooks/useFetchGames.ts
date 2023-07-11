import { Game, GameQuery } from "../types/interfaces";
import useFetchData from "./useFetchData";

const useFetchGames = (gameQuery: GameQuery) => {
  const { data, errors, isLoading } = useFetchData<Game>(
    "/games",
    {
      //# params belongs to AxiosRequestConfig (see useFetchData.ts)
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    //# passing selected genre as array as 'dependencies' is expecting any[]
    [gameQuery]
  );

  return { games: data, errors, isLoading };
};

export default useFetchGames;
