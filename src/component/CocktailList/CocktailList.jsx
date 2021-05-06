import React from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails, favorites, setFavorites }) => (
  <div className="contenu">
    { cocktails.map((cocktail) => (
      <Cocktail
        data={cocktail}
        key={cocktail.idDrink}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    ))}
  </div>
);
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default CocktailList;
