import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Card, ListGroup } from 'react-bootstrap';

class PokemonDetails extends Component {
    state = {
        pokemon: {},
        name: "",
        species: "",
        type: "",
        abilities: [],
        sprites: {},
        typeColors: {
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
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`)
            .then(res => this.setState({ pokemon: res.data,
                                        name: res.data.name,
                                        species: res.data.species.name,
                                        type: res.data.types[0].type.name,
                                        abilities: res.data.abilities,
                                        sprites: res.data.sprites }))
    }

    titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    render() {
        console.log(this.state);
        return (
            <div style={{ backgroundColor: this.state.typeColors[this.state.type], width: '600px', marginLeft: '250px' }}>
                <h3 style={{ textAlign: 'right', padding: '30px' }}>#{this.state.pokemon.order}</h3>
                <div style={{ display: 'flex', paddingLeft: "20px" }}>
                    <div style={{ width: '200px', height: '120px', display: 'flex' }}>
                        <img style={{ width: '100%', height: '200px' }} src={this.state.sprites.front_default} alt="frontD"/>
                    </div>
                    <div style={{ width: '200px', height: '120px', display: 'flex' }}>
                        <img style={{ width: '100%', height: 'auto' }} src={this.state.sprites.front_shiny} alt="frontS"/>
                        <img style={{ width: '100%', height: 'auto' }} src={this.state.sprites.back_default} alt="backD"/>
                        <img style={{ width: '100%', height: 'auto' }} src={this.state.sprites.back_shiny} alt="backS"/>
                    </div>
                </div>
                <h2 style={{ textAlign: "center" }}>{this.titleCase(this.state.name)}</h2>
                <div style={{ textAlign: 'center' }}>
                    <Badge pill variant="light">{this.state.type.toUpperCase()}</Badge>
                </div>
                <Card style={{ width: '20rem' }} className="mx-auto mt-5 mb-5">
                    <Card.Header>Info</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Species:</div>
                            <div className="pl-5">
                                {this.titleCase(this.state.species)}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Height:</div>
                            <div className="pl-5">
                                {this.state.pokemon.height/10} m
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Weight:</div>
                            <div className="pl-5">
                                {this.state.pokemon.weight/10} kg
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ display: 'flex' }}><div className="font-weight-light">Abilities:</div>
                            {this.state.abilities.map((ability, index) => (
                                <div className="font-italic pl-1" key={index} >({this.titleCase(ability.ability.name)})</div>))}
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
        );
    }
}

// const detailStyle = {
//     backgroundColor: "#5F9EA0"
// }

export default PokemonDetails;