import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getData,
    staleTime: 24 * 60 * 60 * 1000,// data will be fresh for the next 24hrs
    initialData: { count: platforms.length, results: platforms }
});

export default usePlatform;