import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImagesUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectGenreId = useGameQueryStore((s) => s.setGenreId);
  const setSelectGenerName = useGameQueryStore((s) => s.setgenreName);

  if (error) return null;
  if (isLoading) return;
  <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
  ></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4} color="green.400">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImagesUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => [
                  setSelectGenreId(genre.id),
                  setSelectGenerName(genre.name),
                ]}
                fontSize="lg"
                variant="link"
                textAlign="left"
                whiteSpace="normal"
                color={genre.id === selectedGenreId ? "blue.500" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
