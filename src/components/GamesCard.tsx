import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconnList from "./PlatformIconnList";
import CriticScore from "./CriticScore";
import getCroppedImagesUrl from "../services/image-url";
import Emoji from "./Emoji";

interface GamesCardProps {
  game: Game;
}
const GamesCard = ({ game }: GamesCardProps) => {
  return (
    <Card marginBottom={4}>
      <Image src={getCroppedImagesUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconnList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconnList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"xl"}>
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
