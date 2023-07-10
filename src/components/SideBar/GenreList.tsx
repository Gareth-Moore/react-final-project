import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useFetchGenres from "../../hooks/useFetchGenres";
import { Image } from "@chakra-ui/react";
import getCroppedImage from "../../services/crop-image";

const GenreList = () => {
  const { genres, errors, isLoading } = useFetchGenres();
  return (
    <List>
      {genres &&
        genres.map((value) => (
          <ListItem key={value.id}>
            <HStack>
              <Image
                src={getCroppedImage(value.image_background)}
                padding={1}
                boxSize={"48px"}
                borderRadius={"1rem"}
              />
              <Text>{value.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
