import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import GameAttributes from "../GameAttributes";
import GameTrailer from "../GameTrailer";
import ScreenshotsGame from "../ScreenshotsGame";

export const GamesDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <ScreenshotsGame gameId={game.id}></ScreenshotsGame>
      </Box>
    </SimpleGrid>
  );
};
