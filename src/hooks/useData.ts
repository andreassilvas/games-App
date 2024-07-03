import { useEffect, useState } from "react";
import apiClient from "../servives/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchRespose<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsloading(true);
        apiClient
            .get<FetchRespose<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                setData(response.data.results)
                setIsloading(false)
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsloading(false)

            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return { data, error, isLoading }
}

export default useData;