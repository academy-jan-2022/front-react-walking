import React, {useEffect, useState} from "react";
import axios from "axios";
import {Hero} from "../App"



const HeroPage: React.FC  = () => {

    const [hero, setHero] = useState<Hero|null>(null);

    useEffect(() => {
        const heroId: string = window.location.pathname
        axios.get(`https://gateway.marvel.com/v1/public/characters/${heroId}?apikey=cb0bf27ee604b7033dac0e8988a429ea`)
            .then(({data}) => setHero(data.data.results[0]));
    }, []);

    return (
        <div>
            {hero && <>
                <h1 aria-label="title">{hero.name}</h1>
                <p role="article" aria-label="description">{hero.description}</p>

            </> }
        </div>
    )
}
export default HeroPage;