import React from 'react';
import PropTypes from "prop-types";
import CardColumns from 'react-bootstrap/CardColumns';

function TypeList(props) {

    return (
        <CardColumns className="pt-4 pl-5 pb-5">
            {props.types.map((type, index) => (
                // <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
                <h3>{type.name}</h3>
            ))}
        </CardColumns>
    );
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;