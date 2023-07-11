import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/SideBar/GenreList";
import { useState } from "react";
import { GameQuery } from "./types/interfaces";
import PlatformSelector from "./components/GamesGrid/PlatformSelector";
import SortSelector from "./components/GamesGrid/SortSelector";

function App() {
  //+ Consolidated these hooks into gameQuery for brevity
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });
  //* alternatively
  //# Initialize it 'as GameQuery' which i THINK isn't as good as genre/platform are initialized as 'undefined' not 'null'
  //# const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
      templateColumns={{ base: "1fr", lg: "225px 1fr" }}
      paddingX={{ base: ".25rem", lg: ".5rem" }}
      paddingY={{ base: ".125rem", lg: ".25rem" }}
    >
      <GridItem area={"nav"} marginBottom={10}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <Heading>Genres:</Heading>
          <GenreList
            updateSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack justifyContent={{ base: "center", lg: "start" }} mb={5} gap={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            updateSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector></SortSelector>
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
