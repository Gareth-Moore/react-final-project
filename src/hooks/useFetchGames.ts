import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game, FetchGamesResponse } from "../types/interfaces";

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function fetchGames() {
    if (prompt("type anything to run API")) {
      console.log("api called");
      setIsLoading(true);
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => {
          setGames(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setErrors(err.message);
          setIsLoading(false);
        });
    }
  }
  useEffect(() => {
    fetchGames();
  }, []);

  return {
    games,
    setGames,
    errors,
    setErrors,
    refetchGames: fetchGames,
    isLoading,
  };
};

export default useFetchGames;
