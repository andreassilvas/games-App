
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshots"
import APIClient from "../services/api-client"

const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey: ['sreenshots', gameId],
        queryFn: apiClient.getData
    })
}

export default useScreenshots;