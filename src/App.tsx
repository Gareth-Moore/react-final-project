import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GamesGrid from "./components/GamesGrid/GamesGrid";
import GenreList from "./components/SideBar/GenreList";

function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
