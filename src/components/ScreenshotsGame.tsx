import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface ScreenshotsGameProps {
  gameId: number;
}

const ScreenshotsGame = ({ gameId }: ScreenshotsGameProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {data?.results.map((image) => (
        <Image key={image.id} src={image.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotsGame;
