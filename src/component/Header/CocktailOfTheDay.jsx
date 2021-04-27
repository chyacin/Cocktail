import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiDrink } from 'react-icons/bi';
import Cocktail from '../CocktailList/Cocktail';
import './CocktailOfTheDay.css';

function CocktailOfTheDay({ cocktails }) {
  const [randomCocktail, setRandomCocktail] = useState();

  const generateRandomCocktail = () => {
    const cocktailIndex = Math.floor(Math.random() * cocktails.length);
    setRandomCocktail(cocktails[cocktailIndex]);
  };
  return (
    <div className="contenu">
      { randomCocktail && (
        <Cocktail
          name={randomCocktail.strDrink}
          image={randomCocktail.strDrinkThumb}
          ingredient1={randomCocktail.strIngredient1}
          ingredient2={randomCocktail.strIngredient2}
          ingredient3={randomCocktail.strIngredient3}
          ingredient4={randomCocktail.strIngredient4}
          ingredient5={randomCocktail.strIngredient5}
          ingredient6={randomCocktail.strIngredient6}
          instruction={randomCocktail.strInstructions}
        />
      )}
      <BiDrink size={30} className="button" p onClick={() => generateRandomCocktail()} type="button" style={{ backgroundColor: 'transparent' }} />
      <p className="glass">
        Click on the cocktail glass
      </p>
    </div>
  );
}
CocktailOfTheDay.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailOfTheDay;
