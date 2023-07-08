import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../../types/interfaces";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} maxWidth={"350px"}>
      <Image src={game.background_image} height={"200px"} objectFit={"cover"} />
      <CardBody padding={2}>
        <Heading fontSize={"lg"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
