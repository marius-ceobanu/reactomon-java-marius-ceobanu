import React from 'react';
import PropTypes from "prop-types";
import CardColumns from 'react-bootstrap/CardColumns';
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
    console.log(props.isLoading);
    if(!props.isLoading) {
        return (
            <CardColumns className="pt-4 pl-5 pb-5">
                {props.pokemonCards.map((pokeCard, index) => (
                    <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
                ))}
            </CardColumns>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>
    }
}

PokemonList.propTypes = {
    pokemonCards: PropTypes.array.isRequired
}

export default PokemonList;