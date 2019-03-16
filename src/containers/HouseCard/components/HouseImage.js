import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


const HouseImage = props => {
  const [current, setCurrent] = useState(0);

  const handleClick = () => {
    const next = current + 1;

    if (next === props.data.length) {
      setCurrent(0);
    } else {
      setCurrent(next);
    }
  };

  return <div className="house-card__img-wrap">
    <div className="house-card__img-wrap-ratio">
      <Card.Img
        className="house-card__img"
        src={props.data[current]}
        onClick={handleClick} />
      <ul className="house-card__img-indicator-list">
        {props.data.map((itm, idx) =>
          <li key={itm} className={`house-card__img-indicator${idx === current ? ' current' : ''}`} />)}
      </ul>
    </div>
    {props.children}
  </div>;
}

HouseImage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HouseImage;
