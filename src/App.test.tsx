import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';
const axios = require('axios');

jest.mock("axios");

test('renders header', () => {
    render(<App/>);
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Superheroes');
});


test('superheroes api is called', async () => {
    axios.get.mockImplementation(() => Promise.resolve());
    let matcher = 'https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea';
    await act(async () => {
        await render(<App/>);
    });

    expect(axios.get).toHaveBeenCalledWith(matcher);
});

test('display list of super hero names', async () => {
    const list = {
        data:
            {data:
                    {results:
                            [{name: "Bat man"}, {name: "Bat-man"}]
                    }
            }
    };

    axios.get.mockImplementation(() => Promise.resolve(list));
    let matcher = 'https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea';
    await act(async () => {
        await render(<App/>);
    });

    const heroesList = screen.getByRole('list');

    expect(heroesList).toHaveTextContent('Bat man');
    expect(heroesList).toHaveTextContent('Bat-man');
});

