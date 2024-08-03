import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getData,
    staleTime: 24 * 60 * 60 * 1000,// data will be fresh for the next 24hrs
    initialData: genres
})


export default useGenres;