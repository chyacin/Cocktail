import React, { useEffect, useState } from 'react';
import './Favorites.css';
import Cocktail from '../CocktailList/Cocktail';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const cocktailFavorites = JSON.parse(localStorage.getItem('favorite-cocktails') || '[]');

    setFavorites(cocktailFavorites);
  }, []);
  return (
    <div className="myFavorites">
      <h1>My Favorites</h1>
      <div>
        {favorites.map((drink) => (
          <Cocktail
            data={drink}
            key={drink.idDrink}
          />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
