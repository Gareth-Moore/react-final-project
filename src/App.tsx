import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import logo from "./assets/logo.webp";

function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
    >
      <GridItem area={"nav"} background={"coral"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} background={"lightgreen"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} background={"dodgerblue"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
