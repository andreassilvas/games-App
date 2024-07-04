import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconnList from "./PlatformIconnList";
import CriticScore from "./CriticScore";
import getCroppedImagesUrl from "../servives/image-url";

interface GamesCardProps {
  game: Game;
}
const GamesCard = ({ game }: GamesCardProps) => {
  return (
    <Card>
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
        <Heading fontSize={"xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
