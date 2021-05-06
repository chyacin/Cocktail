import React from 'react';
import PropTypes from 'prop-types';

function IngredientsFilter({
  ingredients,
  selectedIngredient,
  setSelectedIngredient,
}) {
  return (
    <>
      <div className="dropdown">
          <select
            className="select"
            onChange={(e) => {
              setSelectedIngredient(e.target.value);
            }}
            value={selectedIngredient}
          >
            <option value="">Select Ingredient</option>
            { ingredients.map((ingredient) => (
              <option key={ingredient} value={ingredient}>{ingredient}</option>))}
          </select>
      </div>
    </>
  );
}

IngredientsFilter.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIngredient: PropTypes.string.isRequired,
  setSelectedIngredient: PropTypes.func.isRequired,
};
export default IngredientsFilter;
