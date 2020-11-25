import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function TypeCard(props) {
    return (
        <Card bg="info" border="success" style={cardStyle} className="mb-5">
            <Card.Img variant="top" src={"https://img.icons8.com/cute-clipart/128/000000/pokemon-go.png"} />
            <Card.Body>
                <Card.Title className="text-center">{props.type.name.toUpperCase()}</Card.Title>
            </Card.Body>
        </Card>
    );
}

const cardStyle = {
    width: '13rem',
    borderRadius: '15px',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    fontFamily: 'Impact, Charcoal, sans-serif'
}

TypeCard.propType = {
    type: PropTypes.object.isRequired
}

export default TypeCard;