import { useQuery } from "@tanstack/react-query";
import msLib from "ms";
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
    staleTime: msLib('24h'),
    initialData: platforms
});

export default usePlatform;