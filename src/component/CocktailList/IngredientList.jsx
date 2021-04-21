import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({
  ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,
}) {
  return (
    <div>
      <p>{ingredient1}</p>
      <p>{ingredient2}</p>
      <p>{ingredient3}</p>
      <p>{ingredient4}</p>
      <p>{ingredient5}</p>
    </div>
  );
}

IngredientList.propTypes = {
  ingredient1: PropTypes.string.isRequired,
  ingredient2: PropTypes.string.isRequired,
  ingredient3: PropTypes.string.isRequired,
  ingredient4: PropTypes.string.isRequired,
  ingredient5: PropTypes.string.isRequired,
};

export default IngredientList;
