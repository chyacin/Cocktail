import React from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails }) => (
  <div className="contenu">
    { cocktails.map((cocktail) => (
      <Cocktail
        name={cocktail.strDrink}
        image={cocktail.strDrinkThumb}
        ingredient1={cocktail.strIngredient1}
        ingredient2={cocktail.strIngredient2}
        ingredient3={cocktail.strIngredient3}
        ingredient4={cocktail.strIngredient4}
        ingredient5={cocktail.strIngredient5}
        key={cocktail.idDrink}
      />
    ))}
  </div>
);
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailList;
