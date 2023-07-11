import { SimpleGrid, Text } from "@chakra-ui/react";
import useFetchGames from "../../hooks/useFetchGames";
import GameCard from "./GameCard/GameCard";
import GameCardSkeleton from "./GameCard/GameCardSkeleton";
import GameCardContainer from "./GameCard/GameCardContainer";
import { GameQuery } from "../../types/interfaces";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { games, errors, isLoading } = useFetchGames(gameQuery);

  const gameCardSkeletonKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (errors) return <Text>{errors}</Text>;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      maxWidth={{ base: 350, md: 720, lg: 1090 }}
      spacing={"20px"}
      mx={"auto"}
      justifyContent={"center"}
    >
      {isLoading &&
        gameCardSkeletonKeys.map((value) => (
          <GameCardContainer key={value}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
