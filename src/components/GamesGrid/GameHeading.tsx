import { Heading } from "@chakra-ui/layout";
import { GameQuery } from "../../types/interfaces";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as={"h1"} textAlign={{ base: "center", lg: "left" }}>
      {`
      ${gameQuery.platform ? gameQuery.platform.name + " " : ""}
      ${gameQuery.genre ? gameQuery.genre.name + " " : ""}
      Games
      `}
    </Heading>
  );
};

export default GameHeading;
