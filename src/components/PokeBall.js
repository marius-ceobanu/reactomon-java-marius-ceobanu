import React, { useState, useContext } from "react";
import { PokeBallContext } from "./PokeBallContext";
import { ListGroup } from "react-bootstrap";

const PokeBall = () => {
    // eslint-disable-next-line no-unused-vars
    const [pokeBall, catchPokemon] = useContext(PokeBallContext);

    return (
        <ListGroup>
            {pokeBall.map((pokemon, index) => (
                <ListGroup.Item variant="primary">
                    {pokemon}
                    {console.log(pokeBall)}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default PokeBall;