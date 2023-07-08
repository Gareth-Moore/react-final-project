import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../../hooks/useFetchGames";
import GameCard from "./GameCard/GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";
import GameCardContainer from "./GameCard/GameCardContainer";

const GamesGrid = () => {
  const { games, errors, refetchGames, isLoading } = useFetchGames();
  const gameCardSkeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        {true &&
          gameCardSkeletonKeys.map((value) => (
            <GameCardContainer>
              <GameCardSkeleton key={value} />
            </GameCardContainer>
          ))}
        {games &&
          games.map((value) => (
            <GameCardContainer>
              <GameCard key={value.id} game={value}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
