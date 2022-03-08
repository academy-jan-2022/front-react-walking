import { GetRequest } from './HttpClient';
import { MarvelClient } from './MarvelClient';

const marvelClient = new MarvelClient();
let mockRequests: GetRequest[] = [];

jest.mock('./HttpClient', () => {
    return {
        HttpClient: jest.fn().mockImplementation(() => {
            return {
                async get(request: GetRequest): Promise<any>{
                    mockRequests.push(request);
                    return { name: "banana" };
                }
            };
        })
    };
});

beforeEach(() => {
   mockRequests = [];
});

test('key is added', async () => {
    const result = await marvelClient.get();

    expect(mockRequests).toEqual(
        [{
            url: 'https://gateway.marvel.com/v1/public/characters',
            queryParams: {
                'apikey': 'cb0bf27ee604b7033dac0e8988a429ea'
            }
        }]);

    expect(result).toEqual({ name: "banana" });
});
