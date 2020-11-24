import React from 'react';
import PropTypes from "prop-types";


function PokemonList(props) {
    return ( props.pokemonCards.map((pokeCard) => (
        <h1>{pokeCard.name}</h1>
    )));
}

PokemonList.propTypes = {
    pokemonCards: PropTypes.array.isRequired
}

export default PokemonList;