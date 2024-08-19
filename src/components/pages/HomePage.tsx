import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GenreList from "../GenreList";
import GameHeading from "../GameHeading";
import PlatformSelector from "../PlatformSelector";
import SortSelector from "../SortSelector";
import GameGrid from "../GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`, //Mobile devices
        lg: `"aside main"`, //large devices 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      {/* show just for large devices */}
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      {/* end - show just for large devices */}
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector></PlatformSelector>
            <SortSelector></SortSelector>
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
