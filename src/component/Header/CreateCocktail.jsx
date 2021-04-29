import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsFilter from './IngredientsFilter';

function CreateCocktail({ cocktails }) {
  const [ingredients, setIngredients] = useState([]);
  const createList = (ingredient) => {
    console.log(ingredient);
  };
  useEffect(() => {
    const allIngredients = cocktails.reduce((updatedIngredientList, cocktail) => {
      for (let i = 1; i <= 7; i += 1) {
        let ingredient = cocktail[`strIngredient${i}`];
        if (ingredient != null) {
          ingredient = ingredient.toLowerCase();
        }
        if (ingredient != null && ingredient !== '' && !updatedIngredientList.includes(ingredient)) {
          updatedIngredientList.push(ingredient);
        }
      }
      return updatedIngredientList;
    }, []);
    allIngredients.sort();
    setIngredients(allIngredients);
  }, [cocktails]);
  return (
    <div className="strIngredient">
      <IngredientsFilter
        ingredients={ingredients}
        createList={createList}
      />
    </div>
  );
}
CreateCocktail.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CreateCocktail;
