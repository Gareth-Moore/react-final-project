import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../../types/interfaces";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} maxWidth={"350px"}>
      <Image src={game.background_image} height={"200px"} objectFit={"cover"} />
      <CardBody padding={2}>
        <Heading fontSize={"lg"}>{game.name}</Heading>
        <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
