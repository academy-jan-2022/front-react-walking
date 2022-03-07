import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/characters?apikey=cb0bf27ee604b7033dac0e8988a429ea')
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Superheroes</h1>
      </header>
    </div>
  );
}

export default App;
