import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

function FavoriteButton({ cocktail }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const cocktailFavorites = JSON.parse(localStorage.getItem('favorite-cocktails') || '[]');

    setFavorites(cocktailFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorite-cocktails', JSON.stringify(items));
  };

  const addFavoriteCocktail = () => {
    const newFavoriteList = [...favorites, cocktail];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteCocktail = () => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.idDrink !== cocktail.idDrink,
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div>
      {favorites.findIndex((onlyFavs) => (onlyFavs.idDrink === cocktail.idDrink)) === -1 ? (
        <IoIosHeartEmpty
          size={15}
          onClick={() => addFavoriteCocktail()}
        />
      ) : (
        <IoIosHeart
          size={15}
          onClick={() => removeFavoriteCocktail()}
        />
      )}
    </div>
  );
}
FavoriteButton.propTypes = {
  cocktail: PropTypes.PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
