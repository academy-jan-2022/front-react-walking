import axios, { AxiosResponse } from "axios";

export class HttpClient {
    get<T>(url: string): Promise<T> {
        return axios.get(url);
    }
}
