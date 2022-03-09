import React, {useEffect, useState} from "react";
import axios from "axios";

const HeroPage: React.FC  = () => {



    useEffect(() => {
        const heroId: string = window.location.pathname
        axios.get(`https://gateway.marvel.com/v1/public/characters/${heroId}?apikey=cb0bf27ee604b7033dac0e8988a429ea`)
            .then(({data}) => console.log(data.data.results));
    }, []);

    return (
        <div>Hero Page</div>
    )
}
export default HeroPage;