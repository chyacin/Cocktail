import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({
  ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instruction,
}) {
  return (
    <div className="ingredient">
      <p>{ingredient1}</p>
      <p>{ingredient2}</p>
      <p>{ingredient3}</p>
      <p>{ingredient4}</p>
      <p>{ingredient5}</p>
      <p>{ingredient6}</p>
      <div className="instructions">{instruction}</div>
    </div>
  );
}

IngredientList.propTypes = {
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
  ingredient4: PropTypes.string.isRequired,
  ingredient5: PropTypes.string.isRequired,
  ingredient6: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};

export default IngredientList;
