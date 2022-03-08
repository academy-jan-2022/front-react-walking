import axios, { AxiosResponse } from "axios";

export class HttpClient {
    async get<T>(url: string): Promise<T> {
        const response: AxiosResponse<T> = await axios.get(url);
        return response.data;
    }
}
