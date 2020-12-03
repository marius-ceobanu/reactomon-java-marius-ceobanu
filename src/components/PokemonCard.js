import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { PokeBallContext } from "./PokeBallContext";

function PokemonCard(props) {
    // eslint-disable-next-line no-unused-vars
    const [pokeBall, catchPokemon] = useContext(PokeBallContext);
    const inBall = pokeBall.indexOf(props.pokeCard.url)!==-1;

    const catchIt = (pokemon) => {
        catchPokemon([...pokeBall, pokemon]);
    };

    return (
        <Card bg="danger" border="success" style={cardStyle} className="mb-5">
            <Link to={`/pokemon/${props.index}`}>
                <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
            </Link>
            <Card.Body>
                <Card.Title className="text-center">{props.pokeCard.name.toUpperCase()}</Card.Title>
            </Card.Body>
            <div style={{ textAlign: 'right',
                        marginBottom: '-10px',
                        marginRight: '-10px',
                        marginTop: '-10px' }}>
                {!inBall
                    ? <img alt="poke-ball" src="https://img.icons8.com/color/48/000000/open-pokeball--v2.png" onClick={e => catchIt(props.pokeCard.url)}/>
                    : <img alt="myOwn" src="https://img.icons8.com/color/48/000000/star-pokemon.png"/>
                }
            </div>
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