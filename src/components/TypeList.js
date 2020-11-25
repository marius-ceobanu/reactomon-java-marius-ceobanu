import React, { Component } from 'react';
import PropTypes from "prop-types";
import CardColumns from 'react-bootstrap/CardColumns';
// import axios from 'axios';
import TypeCard from "./TypeCard";

class TypeList extends Component {
    render() {
        return (
            <CardColumns className="pt-4 pl-5 pb-5">
                {this.props.types.map((type, index) => (
                    // <PokemonCard key={index} pokeCard={pokeCard} index={index+1} />
                    // <h3 key={index}>{type.name} - </h3>
                    <TypeCard key={index} type={type} />
                ))}
            </CardColumns>
        );
    }
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;