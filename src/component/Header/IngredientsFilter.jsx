import React from 'react';
import PropTypes from 'prop-types';

function IngredientsFilter({
  ingredients,
  selectedIngredient,
  setSelectedIngredient,
}) {
  return (
    <>
      <select
        className="filter"
        onChange={(e) => {
          setSelectedIngredient(e.target.value);
        }}
        value={selectedIngredient}
      >
        <option value="">Select Ingredient</option>
        { ingredients.map((ingredient) => (
          <option key={ingredient} value={ingredient}>{ingredient}</option>))}
      </select>
    </>
  );
}

IngredientsFilter.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIngredient: PropTypes.string.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
};
export default IngredientsFilter;
