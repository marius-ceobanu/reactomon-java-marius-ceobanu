import React from 'react';
import PropTypes from "prop-types";
import CardColumns from 'react-bootstrap/CardColumns';
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
    return (
        <CardColumns className="pt-4 pl-5 pb-5">
            {props.pokemonCards.map((pokeCard, index) => (
            <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
            ))}
        </CardColumns>
    );
}

PokemonList.propTypes = {
    pokemonCards: PropTypes.array.isRequired
}

export default PokemonList;