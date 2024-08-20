import { useInfiniteQuery } from '@tanstack/react-query';
import msLib from "ms";
import APIClient, { FetchRespose } from '../services/api-client';
import useGameQueryStore from '../store';
import Game from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery)
    return useInfiniteQuery<FetchRespose<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getData({
            params: {
                genres: gameQuery.genreId,
                genreName: gameQuery.genreName,
                parent_platforms: gameQuery.platformId,
                platformName: gameQuery.platformName,
                page: pageParam,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
            }
        }),
        staleTime: msLib('24h'),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        }
    })
}


export default useGames;
