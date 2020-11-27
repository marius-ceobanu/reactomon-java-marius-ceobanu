import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TypeList from "./components/TypeList";
import './App.css';

function App() {

    const [pokemonCards, setPokemonCards] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        console.log("didMount");
        axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(res => setPokemonCards(res.data.results ));
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results ));
    }, []);

    return (
        <Router>
            <div className="App" style={pageStyle}>
                <div className="container">
                    <Header />
                    <Route exact path={["/", "/pokemons"]}>
                        <PokemonList pokemonCards={pokemonCards} />
                    </Route>
                    <Route exact path="/types">
                        <TypeList types={types} />
                    </Route>
                    <Route path="/pokemon/:id" component={PokemonDetails} />
                </div>
            </div>
        </Router>
    );
}


const pageStyle = {
    backgroundColor: '#2F4F4F',
    paddingBottom: '10px'
}

export default App;
