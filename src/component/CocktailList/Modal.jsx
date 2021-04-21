import './CocktailList.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IngredientList from './IngredientList';

function Modal({
  image, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === false) {
    return <button type="button" onClick={() => { setIsOpen(true); }}>Ouvrir</button>;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2 className="card-title">{name}</h2>
        <img className="modal-img" src={image} alt="illustration" />
        <IngredientList
          ingredient1={ingredient1}
          ingredient2={ingredient2}
          ingredient3={ingredient3}
          ingredient4={ingredient4}
          ingredient5={ingredient5}
        />
        <button type="button" onClick={() => { setIsOpen(false); }} className="card-button">Close</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  name: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
  ingredient4: PropTypes.string.isRequired,
  ingredient5: PropTypes.string.isRequired,
};

export default Modal;
