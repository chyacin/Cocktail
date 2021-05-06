import './CocktailList.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen === false) {
    return <button className="modalButton" type="button" onClick={() => { setIsOpen(true); }}>Details</button>;
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        {children}
        <button className="card-button" type="button" onClick={() => { setIsOpen(false); }}>Close</button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
