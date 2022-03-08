import { HttpClient } from './HttpClient';

const baseUrl: string = 'https://gateway.marvel.com/v1/public/';
const charactersUrl: string = `${baseUrl}/characters`;
const apiKey: string = 'cb0bf27ee604b7033dac0e8988a429ea';

const httpClient = new HttpClient();


export class MarvelClient {
    get(): Promise<MarvelHeroes> {
        return httpClient.get<MarvelHeroes>(
            {
                url: charactersUrl,
                queryParams: {
                    apikey: apiKey
                }
            }
        );
    }
}


export interface MarvelHeroes {
    readonly data: MarvelHero[];
}

export interface MarvelHero {
    readonly name: string;
}
