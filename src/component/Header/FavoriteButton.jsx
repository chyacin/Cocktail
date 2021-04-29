import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GrAddCircle } from 'react-icons/gr';

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

  return (
    <GrAddCircle
      size={15}
      onClick={() => addFavoriteCocktail()}
    />
  );
}
FavoriteButton.propTypes = {
  cocktail: PropTypes.func.isRequired,
};

export default FavoriteButton;
