import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
    return (
        <Card bg="danger" border="success" style={cardStyle} className="mb-5">
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
            <Card.Body>
                <Card.Title className="text-center" style={{fontFamily: 'Impact, Charcoal, sans-serif'}}>{props.pokeCard.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

const cardStyle = {
    width: '13rem',
    borderRadius: '15px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
}

export default PokemonCard;