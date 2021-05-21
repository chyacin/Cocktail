import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsFilter from './IngredientsFilter';
import CocktailList from '../CocktailList/CocktailList';

const generateIngredientList = (cocktails) => {
  const ingredientList = cocktails.reduce((updatedIngredientList, cocktail) => {
    const mergedArray = [...updatedIngredientList, ...cocktail.strIngredients];
    const setWithoutDuplicates = new Set(mergedArray);
    const setAsArray = [...setWithoutDuplicates];
    return setAsArray;
  }, []);
  return ingredientList.sort();
};

function CreateCocktail({ cocktails, favorites, setFavorites }) {
  const [ingredients, setIngredients] = useState([]);
  const [refinedIngredients, setRefinedIngredients] = useState([]);
  const [firstSelectedIngredient, setFirstSelectedIngredient] = useState('');
  const [secondSelectedIngredient, setSecondSelectedIngredient] = useState('');

  useEffect(() => {
    const allIngredients = generateIngredientList(cocktails);
    setIngredients(allIngredients);
    setRefinedIngredients(allIngredients);
    setFirstSelectedIngredient('');
    setSecondSelectedIngredient('');
  }, [cocktails]);
  useEffect(() => {
    const allIngredients = generateIngredientList(
      cocktails.filter((cocktail) => (
        firstSelectedIngredient === ''
        || cocktail.strIngredients.includes(firstSelectedIngredient)
      )),
    );
    setRefinedIngredients(
      allIngredients.filter((ingredient) => ingredient !== firstSelectedIngredient),
    );
    setSecondSelectedIngredient('');
  }, [firstSelectedIngredient]);
  return (
    <div className="strIngredient">
      {firstSelectedIngredient}
      {secondSelectedIngredient}
      <IngredientsFilter
        ingredients={ingredients}
        selectedIngredient={firstSelectedIngredient}
        setSelectedIngredient={setFirstSelectedIngredient}
      />
      <IngredientsFilter
        ingredients={refinedIngredients}
        selectedIngredient={secondSelectedIngredient}
        setSelectedIngredient={setSecondSelectedIngredient}
      />
      <CocktailList
        cocktails={cocktails.filter((cocktail) => (
          (
            firstSelectedIngredient === ''
            || cocktail.strIngredients.includes(firstSelectedIngredient)
          )
          && (
            secondSelectedIngredient === ''
            || cocktail.strIngredients.includes(secondSelectedIngredient)
          )
        ))}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </div>
  );
}
CreateCocktail.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default CreateCocktail;
