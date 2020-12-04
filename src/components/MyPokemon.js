import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container} from 'react-bootstrap';
import PokeBall from '../img/pokeBallOpened.png';
import './MyPokemon.css';

const MyPokemon = (props) => {
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [sprite, setSprite] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(props.url)
            .then(res => {
                setName(res.data.name);
                setId(res.data.id);
                setSprite(res.data.sprites.front_default);
                setIsLoading(false);
            });
    }, [props.url]);

    const titleCase = (str) => {
        str = str.toLowerCase().split(' ');
        for (let i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    if(!isLoading) {
        return(
            <div className="holder col col-sm-12 col-md-6 col-lg-4">
                <div className="mt-3">
                    <Card.Img className="MyPokemon" variant="top" src={PokeBall} alt="ball" />
                    <div className="sprite" >
                        <Link to={`/pokemon/${id}`}>
                            <img className="spriteImg" src={sprite} alt={sprite} />
                        </Link>
                    </div>
                    <p className="name" >{titleCase(name)}</p>
                </div>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default MyPokemon;