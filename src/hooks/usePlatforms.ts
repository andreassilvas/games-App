import { useQuery } from "@tanstack/react-query";
import msLib from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getData,
    staleTime: msLib('24h'),
    initialData: platforms
});

export default usePlatform;