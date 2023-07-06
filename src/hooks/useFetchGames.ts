import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Game, FetchGamesResponse } from "../types/interfaces";

const useFetchGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  function fetchGames() {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => setErrors(err.message));
  }
  useEffect(() => {
    fetchGames();
  }, []);

  return { games, setGames, errors, setErrors, fetchGames };
};

export default useFetchGames;
