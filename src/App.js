import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import './App.css';

class App extends Component {
    state = {
        pokemonCards: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => this.setState({ pokemonCards: res.data.results }));
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path={["/", "/pokemons"]}>
                            <h1>All Pokemons</h1>
                            <PokemonList pokemonCards={this.state.pokemonCards} />
                        </Route>
                        <Route exact path="/types">
                            <h1>All Types</h1>
                        </Route>
                    </div>
                </div>
            </Router>
        );
    }


}

export default App;
