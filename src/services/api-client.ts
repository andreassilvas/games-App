import axios, { AxiosRequestConfig } from "axios";

export interface FetchRespose<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "db0b3b3f7ab3439d9db88ad47633a964",
    },
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getData = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchRespose<T>>(this.endpoint, config).then(resp => resp.data)
    }
}

export default APIClient;