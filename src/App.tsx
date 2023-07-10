import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/SideBar/GenreList";
import { useState } from "react";
import { Genre } from "./types/interfaces";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  function updateSelectedGenre(genre: Genre) {
    setSelectedGenre(genre);
  }
  console.log(selectedGenre);
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
          <GenreList updateSelectedGenre={updateSelectedGenre} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        {/* pass selected genre to game grid > game grid*/}
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
