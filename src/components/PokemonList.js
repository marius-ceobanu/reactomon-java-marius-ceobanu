import React, { useState, useEffect } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import PokemonCard from "./PokemonCard";
import axios from "axios";

function PokemonList() {
    const [pokemonCards, setPokemonCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        setIsLoading(true);
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => { setPokemonCards(res.data.results ); setIsLoading(false) });
    }, []);

    if(!isLoading) {
        return (
            <CardColumns className="pt-4 pl-5 pb-5">
                {pokemonCards.map((pokeCard, index) => (
                    <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
                ))}
            </CardColumns>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }
}


export default PokemonList;