import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {getCachedResult, setCachedResult} from "./Services/HeroCache";
import HttpClient from "./Services/HttpClient";

export type Hero = {
    name: string
    thumbnail: {
        path: string,
        extension: string
    }
    id: number
    description: string
}

function App() {
    const [heroes, setHeroes] = useState<Array<Hero>>([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const cachedResult = getCachedResult(0);

        if (cachedResult) {
            setHeroes(cachedResult);
        } else {
            HttpClient.get({url: 'https://gateway.marvel.com/v1/public/characters', queryParams: {
                    apikey: 'cb0bf27ee604b7033dac0e8988a429ea',
                    limit: '10'
                }})
                .then((data: any) => {
                    setHeroes(data.data.results)
                    setCachedResult("0", data.data.results);
                })
        }
    }, []);

    const fetchNextPage = () => {
        const cachedResult = getCachedResult(page);
        if (cachedResult) {
            setHeroes(cachedResult);
        } else {
            HttpClient.get({url: 'https://gateway.marvel.com/v1/public/characters', queryParams: {
                    apikey: 'cb0bf27ee604b7033dac0e8988a429ea',
                    offset: (page * 10).toString(),
                    limit: '10'
                }})
                .then((data: any) => {
                    setHeroes(data.data.results)
                    setCachedResult(page.toString(), data.data.results);
                })
        }
        setPage(page + 1);
        window.scrollTo(0, 0);
    }

    const fetchPrevPage = () => {
        const cachedResult = getCachedResult(page - 2);
        if (cachedResult) {
            setHeroes(cachedResult);
        }
        setPage(page - 1);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <header>
                <h1 aria-label='title'>Avengers</h1>
            </header>
            <ul>
                {
                    heroes.map(hero => {
                        const moveToHeroPage = (id: number) =>
                        {
                            const link = '/' + id
                            navigate(link)
                        };

                        return <li key={hero.name}>
                            <div className='li-image-container'>
                                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt='superheroImage'/>
                            </div>
                            <div>
                                <h2>{hero.name}</h2>
                                <button onClick={() => moveToHeroPage(hero.id)}>more info</button>
                            </div>
                        </li>
                    })
                }
            </ul>
            <div>
                {page > 1 && <button onClick={fetchPrevPage}>Prev</button>}
                <button onClick={fetchNextPage}>Next</button>
            </div>
        </div>
    );
}

export default App;
