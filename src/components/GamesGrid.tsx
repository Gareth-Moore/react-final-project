import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/Md";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <UnorderedList styleType="none" ml={".5rem"}>
        {games &&
          games.map((value) => (
            <ListItem key={value.id}>
              <ListIcon as={MdCheckCircle} color="purple.400" />

              {value.name}
            </ListItem>
          ))}
      </UnorderedList>
    </>
  );
};

export default GamesGrid;
