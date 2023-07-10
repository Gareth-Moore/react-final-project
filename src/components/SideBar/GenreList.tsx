import { HStack, List, ListItem, Text } from "@chakra-ui/layout";
import useFetchGenres from "../../hooks/useFetchGenres";
import { Button, Image, Spinner } from "@chakra-ui/react";
import getCroppedImage from "../../services/crop-image";
import { Genre } from "../../types/interfaces";

interface Props {
  updateSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ updateSelectedGenre, selectedGenre }: Props) => {
  const { genres, errors, isLoading } = useFetchGenres();

  if (isLoading) return <Spinner></Spinner>;

  // if error, don't display anything to keep screen clutter down
  if (errors) return null;

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
              <Button
                onClick={() => updateSelectedGenre(value)}
                variant={"link"}
                className="button-scale"
                overflow={"hidden"}
                fontWeight={
                  selectedGenre?.slug === value.slug ? "bold" : "normal"
                }
              >
                {value.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
