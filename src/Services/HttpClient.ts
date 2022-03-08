import axios, { AxiosResponse } from "axios";

export class HttpClient {
    async get<T>(request: GetRequest): Promise<T> {
        const response: AxiosResponse<T> = await axios.get(request.url);
        return response.data;
    }
}

export interface GetRequest {
    url: string;
}
