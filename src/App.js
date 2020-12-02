import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import TypeList from "./components/TypeList";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App" style={pageStyle}>
                <div className="container">
                    <Header />
                    <Route exact path={["/", "/pokemons"]}>
                        <PokemonList />
                    </Route>
                    <Route exact path="/types">
                        <TypeList />
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
