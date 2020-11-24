import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function PokemonCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
            <Card.Body>
                <Card.Title>{props.pokeCard.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default PokemonCard;