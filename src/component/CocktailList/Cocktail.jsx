import './CocktailList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import IngredientList from './IngredientList';

function Cocktail({
  image, name, ingredient1, ingredient2, ingredient3,
  ingredient4, ingredient5, ingredient6, instruction,
}) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <img className="card-img" src={image} alt="illustration" />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <Modal>
              <h2 className="card-title">{name}</h2>
              <img className="modal-img" src={image} alt="illustration" />
              <IngredientList
                ingredient1={ingredient1}
                ingredient2={ingredient2}
                ingredient3={ingredient3}
                ingredient4={ingredient4}
                ingredient5={ingredient5}
                ingredient6={ingredient6}
                instruction={instruction}
              />
            </Modal>
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
  ingredient6: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};

export default Cocktail;
