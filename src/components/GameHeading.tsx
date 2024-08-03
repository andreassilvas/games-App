import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} color="pink.400">
      {heading}
    </Heading>
  );
};

export default GameHeading;
