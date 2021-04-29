import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({

  ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, instructions,
}) {
  return (
    <div className="ingredient">
      <p>{ingredient1}</p>
      <p>{ingredient2}</p>
      <p>{ingredient3}</p>
      <p>{ingredient4}</p>
      <p>{ingredient5}</p>
      <p>{ingredient6}</p>
      <div className="instructions">{instructions}</div>
    </div>
  );
}
IngredientList.propTypes = {
  ingredient1: PropTypes.string,
  ingredient2: PropTypes.string,
  ingredient3: PropTypes.string,
  ingredient4: PropTypes.string,
  ingredient5: PropTypes.string,
  ingredient6: PropTypes.string,
  instructions: PropTypes.string,
};
IngredientList.defaultProps = {
  ingredient1: null,
  ingredient2: null,
  ingredient3: null,
  ingredient4: null,
  ingredient5: null,
  ingredient6: null,
  instructions: null,
};

export default IngredientList;
