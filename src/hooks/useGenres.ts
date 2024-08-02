import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchRespose } from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient
        .get<FetchRespose<Genre>>('/genres')
        .then(resp => resp.data),
    staleTime: 24 * 60 * 60 * 1000,// data will be fresh for the next 24hrs
    initialData: { count: genres.length, results: genres }
})


export default useGenres;