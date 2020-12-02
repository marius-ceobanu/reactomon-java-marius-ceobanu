import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import CardColumns from 'react-bootstrap/CardColumns';
import TypeCard from "./TypeCard";

function TypeList(props) {
    return (
        <CardColumns className="pt-4 pl-5 pb-5">
            {props.types.map((type, index) => (
                <TypeCard key={index} type={type} />
            ))}
        </CardColumns>
    );
}

TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList;