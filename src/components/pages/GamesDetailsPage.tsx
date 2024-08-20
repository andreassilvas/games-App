import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../../hooks/useGame";
import ExpandableText from "../ExpandableText";
import DefinitionItem from "../DefinitionItem";
import CriticScore from "../CriticScore";
import GameAttributes from "../GameAttributes";

export const GamesDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}></GameAttributes>

      {/* <SimpleGrid columns={2} as="dl">
        <DefinitionItem term="Platform">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid> */}
    </>
  );
};
