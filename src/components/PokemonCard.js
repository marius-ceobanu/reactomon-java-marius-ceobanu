import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
    return (
        <Card bg="danger" border="success" style={cardStyle} className="mb-5">
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
            <Card.Body>
                <Card.Title className="text-center">{props.pokeCard.name.toUpperCase()}</Card.Title>
            </Card.Body>
        </Card>
    );
}

const cardStyle = {
    width: '13rem',
    borderRadius: '15px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Impact, Charcoal, sans-serif'
}

PokemonCard.propTypes = {
    pokeCard: PropTypes.object.isRequired
}

export default PokemonCard;