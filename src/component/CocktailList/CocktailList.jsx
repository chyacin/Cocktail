import React from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => (
  <div>
    { cocktails.map((cocktail) => (
      <Cocktail
        name={cocktail.strDrink}
        image={cocktail.strDrinkThumb}
        key={cocktail.idDrink}
      />
    ))}
  </div>
);
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailList;
