import { HttpClient } from './HttpClient';
import { MarvelClient } from './MarvelClient';

const marvelClient = new MarvelClient();
const httpClient = new HttpClient();
jest.mock('HttpClient');


test('key is added', async () => {
    const result = await marvelClient.get();

    expect(httpClient.get).toBeCalledWith(
        {
            url: 'https://gateway.marvel.com/v1/public/characters',

        });

    expect(result).toEqual({ name: "banana" });
});
