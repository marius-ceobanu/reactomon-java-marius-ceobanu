import React, { useContext } from "react";
import { PokeBallContext } from "./PokeBallContext";
import { Alert } from 'react-bootstrap';
import MyPokemon from "./MyPokemon";

const PokeBall = () => {
    // eslint-disable-next-line no-unused-vars
    const [pokeBall, catchPokemon] = useContext(PokeBallContext);

    if(pokeBall.length===0) {
        return <Alert variant={"info"} style={{ marginBottom: '350px', marginTop: '50px', textAlign: "center" }}>No catch yet !....</Alert>
    } else {
        return (
            <div className="pt-4 pl-5 row" style={{ marginBottom: '150px' }} >
                {pokeBall.map((pokemon, index) => (
                    <MyPokemon key={index} url={pokemon}>{pokemon}</MyPokemon>
                ))}
            </div>
        );
    }
};

export default PokeBall;