import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


type Hero = {
    name: string
    thumbnail: {
        path: string,
        extension: string
    }
}

function App() {
    const [heroes, setHeroes] = useState<Array<Hero>>([]);

    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea')
            .then(({data}) => setHeroes(data.data.results));
    }, []);

    return (
        <>
            <header>
                <h1 role='title'>Avengers</h1>
            </header>
            <ul>
                {
                    heroes.map(hero => {
                        const generatePageHref = (name: string) => '/' + name.toLowerCase();

                        return <li key={hero.name}>
                            <div className='li-image-container'>
                                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
                            </div>
                            <div>
                                <h2>{hero.name}</h2>
                                <a href={generatePageHref(hero.name)}>
                                    <button>more info</button>
                                </a>
                            </div>
                        </li>
                    })
                }
            </ul>
        </>
    );
}

export default App;
