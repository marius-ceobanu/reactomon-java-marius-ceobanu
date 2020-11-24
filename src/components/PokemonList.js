import React from 'react';
import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";


function PokemonList(props) {
    return ( props.pokemonCards.map((pokeCard, index) => (
        <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
    )));
}

PokemonList.propTypes = {
    pokemonCards: PropTypes.array.isRequired
}

export default PokemonList;