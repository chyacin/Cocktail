import React from 'react';
import PropTypes from 'prop-types';

const IngredientsFilter = ({ ingredients, CreateList }) => (
  <>
    <select className="contenu" onChange={(e) => CreateList(e.target.value)}>
      <option>Select Ingredient</option>
      { ingredients.map((ingredient) => (
        <option key={ingredient}>{ingredient}</option>
      ))}
    </select>
    <select className="contenu">
      <option>Select Ingredient</option>
      { ingredients.map((ingredient) => (
        <option key={ingredient}>{ingredient}</option>
      ))}
    </select>
  </>
);

IngredientsFilter.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  CreateList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default IngredientsFilter;
