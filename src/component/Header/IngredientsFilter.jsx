import React, { useState } from 'react';
import PropTypes from 'prop-types';

function IngredientsFilter({ ingredients, setFirstSelectedIngredient }) {
  const [selectedValue, setSelectedValue] = useState();
  function onChangeSelect(e) {
    setSelectedValue(e.target.value);
    setFirstSelectedIngredient(e.target.value);
  }
  return (
    <>
      <select className="contenu" onChange={onChangeSelect} value={selectedValue}>
        <option>Select Ingredient</option>
        { ingredients.map((ingredient) => (
          <option key={ingredient}>{ingredient}</option>))}
      </select>
      <select className="contenu">
        <option>Select Ingredient</option>
        { ingredients.map((ingredient) => (
          <option key={ingredient}>{ingredient}</option>
        ))}
      </select>
    </>
  );
}

IngredientsFilter.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  setFirstSelectedIngredient: PropTypes.func.isRequired,
};
export default IngredientsFilter;
