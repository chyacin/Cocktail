import './CocktailList.css';
import React from 'react';
import PropTypes from 'prop-types';

function Cocktail({ image, name }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={image} alt="illustration" />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <button type="button" className="card-button">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Cocktail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Cocktail;
