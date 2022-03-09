import React from 'react';
import HeroPage from './HeroPage';
import {act, render, screen} from '@testing-library/react';
import App from "../App";

const axios = require('axios');

jest.mock("axios");

let matcher = 'https://gateway.marvel.com/v1/public/characters/1?apikey=cb0bf27ee604b7033dac0e8988a429ea';

beforeEach(async () => {
    const list = {
        data:
            {
                data:
                    {
                        results:
                            [{
                                id: 1,
                                name: "Batman",
                                thumbnail: {
                                    path: "pictureurl",
                                    extension: "jpg"
                                },
                            }]
                    }
            }
    };

    axios.get.mockImplementation(() => Promise.resolve(list));
    await act(async () => {
        await render(<HeroPage/>);
    });

})

test('renders header', () => {
    const heading = screen.getByRole('heading', {name: 'title'});
    expect(heading).toHaveTextContent('Batman');
});

