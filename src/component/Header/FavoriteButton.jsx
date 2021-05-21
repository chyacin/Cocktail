import React from 'react';
import PropTypes from 'prop-types';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

function FavoriteButton({ cocktail, favorites, setFavorites }) {
  const addFavoriteCocktail = () => {
    const newFavoriteList = [...favorites, cocktail];
    setFavorites(newFavoriteList);
  };

  const removeFavoriteCocktail = () => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.idDrink !== cocktail.idDrink,
    );
    setFavorites(newFavoriteList);
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
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
  cocktail: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteButton;
