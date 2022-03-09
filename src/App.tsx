import React, {MouseEventHandler, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Hero = {
    name: string
    thumbnail: {
        path: string,
        extension: string
    }
    id: number
}

function App() {
    const [heroes, setHeroes] = useState<Array<Hero>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea')
            .then(({data}) => setHeroes(data.data.results));
    }, []);

    return (
        <>
            <header>
                <h1 aria-label='title'>Avengers</h1>
            </header>
            <ul>
                {
                    heroes.map(hero => {
                        const moveToHeroPage = (name: string, id: number) =>
                        {
                            const link = '/' + name.split(' ').join('-').toLowerCase()
                            navigate(link, {state: id})
                        };

                        return <li key={hero.name}>
                            <div className='li-image-container'>
                                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='superheroImage'/>
                            </div>
                            <div>
                                <h2>{hero.name}</h2>
                                <button onClick={() => moveToHeroPage(hero.name, hero.id)}>more info</button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    );
}

export default App;
