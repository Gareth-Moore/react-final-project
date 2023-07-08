import { Badge } from "@chakra-ui/layout";

interface Props {
  criticScore: number;
}

const CriticScore = ({ criticScore }: Props) => {
  let color = criticScore > 90 ? "green" : criticScore > 80 ? "yellow" : "red";
  return (
    <Badge px={2} borderRadius={5} colorScheme={color} fontSize={"sm"}>
      {criticScore}
    </Badge>
  );
};

export default CriticScore;
