import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../../types/interfaces";
import PlatformIconList from "./PlatformIconList";
import { HStack } from "@chakra-ui/layout";
import CriticScore from "./CriticScore";
import getCroppedImage from "../../../services/crop-image";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"100%"}>
      <Image
        src={getCroppedImage(game.background_image)}
        height={"200px"}
        objectFit={"cover"}
      />
      <CardBody padding={2}>
        <Heading fontSize={"lg"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
        <HStack justifyContent={"space-between"} wrap={"wrap"}>
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
