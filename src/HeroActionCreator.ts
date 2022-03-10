import axios from "axios";

const ExtractHeroesAction = (heroId: number) => (dispatch: any) => {
    dispatch ({type: 'fetchHero'});
    axios.get(`https://gateway.marvel.com/v1/public/characters/${heroId}?apikey=cb0bf27ee604b7033dac0e8988a429ea`)
        .then(({data}) => dispatch({type: 'fetchHero', hero: data.data.results[0]}))
}