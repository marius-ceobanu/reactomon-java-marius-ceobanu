import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import { PokeBallContext } from "./PokeBallContext";

function PokemonDetails(props) {
    const id = props.match.params.id;
    const typeColors = {
        "normal": "#5F9EA0",
        "fighting": "#DC143C",
        "flying": "#00BFFF",
        "poison": "#ADFF2F",
        "ground": "#8B4513",
        "rock": "#C0C0C0",
        "bug": "#DAA520",
        "ghost": "#F8F8FF",
        "steel": "#A9A9A9",
        "fire": "#B22222",
        "water": "#00FFFF",
        "grass": "#ADFF2F",
        "electric": "#FFFF00",
        "psychic": "#FF00FF",
        "ice": "#1E90FF",
        "dragon": "#FF4500",
        "dark": "#000000",
        "fairy": "#DA70D6",
        "unknown": "#FAEBD7",
        "shadow": "#778899"
    };
    const [pokemon, setPokemon] = useState({});
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [type, setType] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);
    const [sprites, setSprites] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [pokeBall, catchPokemon] = useContext(PokeBallContext);
    const inBall = pokeBall.indexOf(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)!==-1;

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => {
                setPokemon(res.data);
                setName(res.data.name);
                setSpecies(res.data.species.name);
                setType(res.data.types[0].type.name);
                setAbilities(res.data.abilities);
                setStats(res.data.stats);
                setSprites(res.data.sprites);
                setIsLoading(false);
                });
    }, [id]);

    const catchIt = (pokemon) => {
        catchPokemon([...pokeBall, pokemon]);
    };

    const titleCase = (str) => {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    if(!isLoading) {
        return (
            <div style={{ backgroundColor: typeColors[type],
                width: '900px', marginLeft: '110px',
                paddingBottom: '20px', marginBottom: '10px',
                marginTop: '10px', borderRadius: '15px' }}>
                <h3 style={{ textAlign: 'right', padding: '30px' }}>#{pokemon.order}</h3>
                <div style={{ display: 'flex', paddingLeft: "150px" }}>
                    <div style={{ width: '200px', height: '120px', display: 'flex' }}>
                        <img style={{ width: '100%', height: '200px' }} src={sprites.front_default} alt="frontD"/>
                    </div>
                    <div style={{ width: '200px', height: '120px', display: 'flex' }}>
                        <img style={{ width: '100%', height: 'auto' }} src={sprites.front_shiny} alt="frontS"/>
                        <img style={{ width: '100%', height: 'auto' }} src={sprites.back_default} alt="backD"/>
                        <img style={{ width: '100%', height: 'auto' }} src={sprites.back_shiny} alt="backS"/>
                    </div>
                </div>
                <h2 style={{ textAlign: "center" }}>{titleCase(name)}</h2>
                <div style={{ textAlign: 'center' }}>
                    <Badge pill variant="light">{type.toUpperCase()}</Badge>
                </div>
                {!inBall
                    ? <img style={{ paddingLeft: '700px' }} alt="catch it" src="https://img.icons8.com/plasticine/100/000000/open-pokeball.png" onClick={e => catchIt(`https://pokeapi.co/api/v2/pokemon/${id}/`)}/>
                    : <img style={{ paddingLeft: '700px' }} alt="myOwn" src="https://img.icons8.com/color/100/000000/star-pokemon.png"/>
                }
                <div style={{ display: 'flex' }}>
                    <Card style={{ width: '22rem' }} className="mx-auto mt-2 mb-5">
                        <Card.Header>Info</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Species:</div>
                                <div className="pl-5">
                                    {titleCase(species)}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Height:</div>
                                <div className="pl-5">
                                    {pokemon.height/10} m
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Weight:</div>
                                <div className="pl-5">
                                    {pokemon.weight/10} kg
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Base experience:</div>
                                <div className="pl-3">
                                    {pokemon.base_experience}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Abilities:</div>
                                {abilities.map((ability, index) => (
                                    <div className="font-italic pl-1" key={index} style={{ fontSize: '90%' }}>({titleCase(ability.ability.name)})</div>))}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <Card style={{ width: '22rem' }} className="mx-auto mt-2 mb-5">
                        <Card.Header>Stats</Card.Header>
                        <ListGroup variant="flush">
                            {stats.map(stat => (
                                <div key={stat.stat.name} className="pr-2 pl-2 pb-1">
                                    <div className="font-weight-light mt-2" style={{ textAlign: 'center' }}>{titleCase(stat.stat.name)}</div>
                                    <ProgressBar variant="info" animated now={stat.base_stat} label={stat.base_stat}/>
                                </div>
                            ))}
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    } else {
        return <h3 style={{ textAlign: 'center', marginBottom: '400px' }}>Loading...</h3>;
    }

}

export default PokemonDetails;
