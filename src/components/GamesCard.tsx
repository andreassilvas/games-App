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
    <Card borderEndRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImagesUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconnList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconnList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
