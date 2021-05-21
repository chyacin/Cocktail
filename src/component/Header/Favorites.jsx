import React from 'react';
import './Favorites.css';
import PropTypes from 'prop-types';
import Cocktail from '../CocktailList/Cocktail';

function Favorites({ favorites, setFavorites }) {
  return (
    <div className="myFavorites">
      <div className="favoriteCocktail">
        {favorites.map((drink) => (
          <Cocktail
            data={drink}
            key={drink.idDrink}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
    </div>
  );
}
Favorites.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default Favorites;
