import './CocktailList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

function Cocktail({
  image, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,
}) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={image} alt="illustration" />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <Modal
              name={name}
              image={image}
              ingredient1={ingredient1}
              ingredient2={ingredient2}
              ingredient3={ingredient3}
              ingredient4={ingredient4}
              ingredient5={ingredient5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
Cocktail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
  ingredient4: PropTypes.string.isRequired,
  ingredient5: PropTypes.string.isRequired,
};

export default Cocktail;
