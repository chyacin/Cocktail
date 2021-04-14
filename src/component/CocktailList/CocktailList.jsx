import React from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => (
  <div>
    { cocktails.map((cocktail) => (
      <Cocktail
        name={cocktail.name}
        image={cocktail.image}
        recette={cocktail.recette}
        key={cocktail.name}
      />
    ))}
  </div>
);
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailList;
