import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CocktailList from './CocktailList/CocktailList';
import SearchBar from './SearchBar/SearchBar';

const Home = ({ cocktails, favorites, setFavorites }) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CocktailList
        cocktails={cocktails.filter(
          (cocktail) => (
            cocktail.strDrink.toLowerCase().includes(query.toLowerCase())
          ),
        )}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
};
Home.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default Home;
