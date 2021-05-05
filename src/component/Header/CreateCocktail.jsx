import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsFilter from './IngredientsFilter';
import CocktailList from '../CocktailList/CocktailList';

function CreateCocktail({ cocktails }) {
  const [ingredients, setIngredients] = useState([]);
  const [firstSelectedIngredient, setFirstSelectedIngredient] = useState();
  useEffect(() => {
    const allIngredients = cocktails.reduce((updatedIngredientList, cocktail) => {
      const mergedArray = [...updatedIngredientList, ...cocktail.strIngredients];
      const setWithoutDuplicates = new Set(mergedArray);
      const setAsArray = [...setWithoutDuplicates];
      return setAsArray;
    }, []);
    allIngredients.sort();
    setIngredients(allIngredients);
  }, [cocktails]);
  return (
    <div className="strIngredient">
      <IngredientsFilter
        ingredients={ingredients}
        setFirstSelectedIngredient={setFirstSelectedIngredient}
      />
      <CocktailList cocktails={cocktails.filter((cocktail) => (
        cocktail.strIngredients.includes(firstSelectedIngredient)
      ))}
      />
    </div>
  );
}
CreateCocktail.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CreateCocktail;
