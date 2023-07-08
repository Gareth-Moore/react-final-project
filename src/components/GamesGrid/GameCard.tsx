import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../types/interfaces";
import PlatformIconList from "./PlatformIconList";
import { Badge, HStack } from "@chakra-ui/layout";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} maxWidth={"350px"}>
      <Image src={game.background_image} height={"200px"} objectFit={"cover"} />
      <CardBody padding={2}>
        <Heading fontSize={"lg"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"} wrap={"wrap"}>
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticScore criticScore={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
