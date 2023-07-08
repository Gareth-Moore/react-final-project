import { SimpleGrid, Text } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/Md";
import useFetchGames from "../../hooks/useFetchGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, setGames, errors, setErrors, fetchGames } = useFetchGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        maxWidth={{ base: 350, md: 720, lg: 1090 }}
        spacing={"20px"}
        mx={"auto"}
        justifyContent={"center"}
      >
        {games &&
          games.map((value) => (
            <GameCard key={value.id} game={value}></GameCard>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
