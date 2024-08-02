import { useQuery } from "@tanstack/react-query";
import { FetchRespose } from "../services/api-client";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient
            .get<FetchRespose<Platform>>('/platforms/lists/parents')
            .then(resp => resp.data),

    staleTime: 24 * 60 * 60 * 1000,// data will be fresh for the next 24hrs
    initialData: { count: platforms.length, results: platforms }
});

export default usePlatform;