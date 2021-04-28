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
        ingredient6={cocktail.strIngredient6}
        ingredient7={cocktail.strIngredient7}
        measure1={cocktail.strMeasure1}
        measure2={cocktail.strMeasure2}
        measure3={cocktail.strMeasure3}
        measure4={cocktail.strMeasure4}
        measure5={cocktail.strMeasure5}
        measure6={cocktail.strMeasure6}
        measure7={cocktail.strMeasure7}
        instruction={cocktail.strInstructions}
        key={cocktail.idDrink}
      />
    ))}
  </div>
);
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailList;
