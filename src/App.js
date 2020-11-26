import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TypeList from "./components/TypeList";
import './App.css';

class App extends Component {
    state = {
        pokemonCards: [],
        types: []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => this.setState({ pokemonCards: res.data.results }));
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => this.setState({ types: res.data.results }))
    }

    render() {
        return (
            <Router>
                <div className="App" style={pageStyle}>
                    <div className="container">
                        <Header />
                        <Route exact path={["/", "/pokemons"]}>
                            <PokemonList pokemonCards={this.state.pokemonCards} />
                        </Route>
                        <Route exact path="/types">
                            <TypeList types={this.state.types} />
                        </Route>
                        <Route path="/pokemon/:id" component={PokemonDetails} />
                    </div>
                </div>
            </Router>
        );
    }
}

const pageStyle = {
    backgroundColor: '#2F4F4F',
    paddingBottom: '10px'
}

export default App;
