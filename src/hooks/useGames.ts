import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from './../App';
import APIClient, { FetchRespose } from '../services/api-client';
import { Platform } from './usePlatforms';

const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchRespose<Game>, Error>({
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
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined
    }
})

export default useGames;
