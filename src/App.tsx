import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //Mobile devices
        lg: `"nav nav" "aside main"`, //large devices 1024px
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* show just for large devices */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      {/* end - show just for large devices */}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
