import { Heading } from "@chakra-ui/layout";
import { GameQuery } from "../../types/interfaces";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  console.log(gameQuery.platform?.name);
  return (
    <Heading as={"h1"}>
      {`
      ${gameQuery.platform ? gameQuery.platform.name + " " : ""}
      ${gameQuery.genre ? gameQuery.genre.name + " " : ""}
      Games
      `}
    </Heading>
  );
};

export default GameHeading;
