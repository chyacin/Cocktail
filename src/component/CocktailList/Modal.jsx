import './CocktailList.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ image, name, recette }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === false) {
    return <button className="modalButton" type="button" onClick={() => { setIsOpen(true); }}>Détails</button>;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2 className="card-title">{name}</h2>
        <img className="card-img" src={image} alt="illustration" />
        <p className="big-card-text">{recette}</p>
        <button type="button" onClick={() => { setIsOpen(false); }} className="card-button">{recette}</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  name: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
  recette: PropTypes.element.isRequired,
};

export default Modal;
