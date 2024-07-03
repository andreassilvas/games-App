import { useEffect, useState } from "react";
import apiClient from "../servives/api-client";
import { CanceledError } from "axios";


interface Genre {
    id: number;
    name: string;
    // slug: string;
    // games_acount: number;
    // image_background: string;
}

interface FetchGenresRespose {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true);
        apiClient
            .get<FetchGenresRespose>("/genres", { signal: controller.signal })
            .then((response) => {
                setGenres(response.data.results)
                setIsloading(false)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsloading(false)

            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading }
}

export default useGenres;