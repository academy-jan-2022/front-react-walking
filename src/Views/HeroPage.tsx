import React, {useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {Hero} from "../App";
import {store} from "../index";
import {fetchHeroAsync} from "../HeroSlice";


const HeroPage: React.FC = () => {


    const dispatch = useDispatch<typeof store.dispatch>();

    const [hero, setHero] = useState<Hero | null>(null);

    useEffect(() => {
        const heroId: number = Number.parseInt(window.location.pathname.substring(1))
        const fetchHero = async () => {
            let payload = await dispatch(fetchHeroAsync(heroId)).unwrap();
            setHero(payload)
        }
        fetchHero();
    }, [dispatch]);

    return (
        <div>
            {hero && <>
                <h1 aria-label="title">{hero.name}</h1>
                <p role="article" aria-label="description">{hero.description}</p>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name}/>
            </>}
        </div>
    )
}
export default HeroPage;