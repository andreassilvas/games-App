import { useQuery } from "@tanstack/react-query";
import msLib from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getData,
    staleTime: msLib('24h'),
    initialData: genres
})


export default useGenres;

function ms(arg0: string): number | undefined {
    throw new Error("Function not implemented.");
}
