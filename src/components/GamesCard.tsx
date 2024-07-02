import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconnList from "./PlatformIconnList";

interface GamesCardProps {
  game: Game;
}
const GamesCard = ({ game }: GamesCardProps) => {
  return (
    <Card borderEndRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconnList
          platforms={game.parent_platforms.map((plat) => plat.platform)}
        ></PlatformIconnList>
      </CardBody>
    </Card>
  );
};

export default GamesCard;
