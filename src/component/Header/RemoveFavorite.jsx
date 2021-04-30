import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MdRemoveCircleOutline } from 'react-icons/md';

function RemoveFavorite({ drink }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const cocktailFavorites = JSON.parse(localStorage.getItem('favorite-cocktails') || '[]');

    setFavorites(cocktailFavorites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favorite-cocktails', JSON.stringify(items));
  };

  const removeFavoriteCocktail = () => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.idDrink !== drink.idDrink,
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <MdRemoveCircleOutline
      size={15}
      onClick={() => removeFavoriteCocktail()}
    />
  );
}
RemoveFavorite.propTypes = {
  drink: PropTypes.func.isRequired,
};

export default RemoveFavorite;
