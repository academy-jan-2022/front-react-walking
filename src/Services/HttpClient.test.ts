import { HttpClient } from './HttpClient';
const axios = require('axios');

jest.mock("axios");


let matcher = 'https://some.url.com';
const httpClient = new HttpClient();

beforeEach(async () => {
    const list = { data: { name: "banana" }};
    axios.get.mockImplementation(() => Promise.resolve(list));
})

interface MyResult {
    name: string;
}

test('url is called', async () => {
    const result = await httpClient.get<MyResult>({ url: matcher });

    expect(result).toEqual({ name: "banana" });
    expect(axios.get).toHaveBeenCalledWith(matcher);
});

