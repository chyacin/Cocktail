import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IngredientsFilter from './IngredientsFilter';

function CreateCocktail({ cocktails }) {
  const [ingredients, setIngredients] = useState([]);
  const CreateList2 = (ingredient) => {
    console.log(ingredient);
  };
  useEffect(() => {
    // alert(`ingredients should be updated from ${cocktails.length} cocktails`);
    setIngredients((previousIngredientList) => {
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
      }, previousIngredientList);
      allIngredients.sort();
      return allIngredients;
    });
  }, [cocktails]);

  return (
    <div className="strIngredient">
      <IngredientsFilter ingredients={ingredients} CreateList2={CreateList2} />
    </div>
  );
}
CreateCocktail.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CreateCocktail;
