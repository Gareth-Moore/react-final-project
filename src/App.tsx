import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
      paddingX={{ base: ".25rem", lg: ".5rem" }}
      paddingY={{ base: ".125rem", lg: ".25rem" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} background={"lightgreen"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
