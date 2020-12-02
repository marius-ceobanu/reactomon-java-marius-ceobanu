import React, { useEffect, useState } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import TypeCard from "./TypeCard";
import axios from "axios";

function TypeList() {
    const [types, setTypes] = useState([]);

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setTypes(res.data.results ));
    }, []);

    return (
        <CardColumns className="pt-4 pl-5 pb-5">
            {types.map((type, index) => (
                <TypeCard key={index} type={type} />
            ))}
        </CardColumns>
    );
}

export default TypeList;