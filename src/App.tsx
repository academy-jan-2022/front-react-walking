import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";


type Hero = {
    name: string
}

function App() {
    const [heroes, setHeroes] = useState<Array<Hero>>([]);

    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea')
            .then(({ data }) => setHeroes(data.data.results));
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Superheroes</h1>
          <ul>
              {
                heroes.map(hero => {
                    return <li key={hero.name}>{hero.name}</li>
                })
              }
          </ul>
      </header>
    </div>
  );
}

export default App;
