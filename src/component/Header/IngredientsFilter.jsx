import React from 'react';
import PropTypes from 'prop-types';

function IngredientsFilter({ ingredients, createList }) {
  return (
    <>
      <select className="contenu" onChange={(e) => createList(e.target.value)}>
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
  createList: PropTypes.func.isRequired,
};
export default IngredientsFilter;
