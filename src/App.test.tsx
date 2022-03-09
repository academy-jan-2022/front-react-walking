import React from 'react';
import {act, render, screen} from '@testing-library/react';
import App from './App';

const axios = require('axios');

jest.mock("axios");

let matcher = 'https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

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
                            }, {
                                id: 2,
                                name: "spiderman",
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
        await render(<App/>);
    });
})


test('renders header', () => {
    const heading = screen.getByRole('heading',{name: 'title'});
    expect(heading).toHaveTextContent('Avengers');
});


test('superheroes api is called', async () => {
    expect(axios.get).toHaveBeenCalledWith(matcher);
});

test('display list of super hero names', async () => {
    const heroesList = screen.getByRole('list');

    expect(heroesList).toHaveTextContent('Batman');
});

test('display button inside list item', async () => {
    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(2);
    buttons.forEach(button => expect(button).toHaveTextContent("more info"))
});

test('display image inside list item', async () => {
    const images = screen.getAllByRole('img');

    expect(images.length).toBe(2);
    images.forEach(image => expect(image).toHaveAttribute('src','pictureurl.jpg'))
});

test('move to batman when clicking more info button',  () => {
    delete (window as any).location;
    (window as any).location = { assign: jest.fn() }
    const buttons = screen.getAllByRole('button');
    buttons[0].click();
    expect(mockedUsedNavigate).toBeCalledWith('/1');
});

test('move to spiderman when clicking more info button',  () => {
    delete (window as any).location;
    (window as any).location = { assign: jest.fn() }
    const buttons = screen.getAllByRole('button');
    buttons[1].click();
    expect(mockedUsedNavigate).toBeCalledWith('/2');
});


