import { useEffect, useState } from "react";
import apiClient from "../servives/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGames {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGames>("/games", { signal: controller.signal })
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            });

        return () => controller.abort();
    }, []);

    return { games, error }
}

export default useGames;
