import { useEffect, useState } from "react";
import apiClient from "../servives/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true);
        apiClient
            .get<FetchGames>("/games", { signal: controller.signal })
            .then((response) => {
                setGames(response.data.results)
                setIsloading(false)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsloading(false)

            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading }
}

export default useGames;
