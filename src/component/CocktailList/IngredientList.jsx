import React from 'react';
import PropTypes from 'prop-types';

function IngredientList({
  ingredient1, ingredient2, ingredient3, ingredient4, ingredient5,
  ingredient6, ingredient7, measure1, measure2, measure3, measure4,
  measure5, measure6, measure7, instruction,
}) {
  return (
    <div className="ingredient">
      <p>
        {measure1}
        {' : '}
        {ingredient1}
      </p>
      <p>
        {measure2}
        {' : '}
        {ingredient2}
      </p>
      <p>
        {measure3}
        {' : '}
        {ingredient3}
      </p>
      <p>
        {measure4}
        {' : '}
        {ingredient4}
      </p>
      <p>
        {measure5}
        {' : '}
        {ingredient5}
      </p>
      <p>
        {measure6}
        {' : '}
        {ingredient6}
      </p>
      <p>
        {measure7}
        {' : '}
        {ingredient7}
      </p>
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
  ingredient7: PropTypes.string.isRequired,
  measure1: PropTypes.string.isRequired,
  measure2: PropTypes.string.isRequired,
  measure3: PropTypes.string.isRequired,
  measure4: PropTypes.string.isRequired,
  measure5: PropTypes.string.isRequired,
  measure6: PropTypes.string.isRequired,
  measure7: PropTypes.string.isRequired,
  instruction: PropTypes.string.isRequired,
};

export default IngredientList;
