import React from 'react';

const HousePrice = props => (
    <p className="house-card__price">$ {props.data.toLocaleString()}</p>
);

export default HousePrice;
