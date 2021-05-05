import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CocktailList from './CocktailList/CocktailList';
import SearchBar from './SearchBar/SearchBar';

const Home = ({ cocktails }) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CocktailList cocktails={cocktails.filter(
        (cocktail) => (
          cocktail.strDrink.toLowerCase().includes(query.toLowerCase())
        ),
      )}
      />
    </>
  );
};
Home.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Home;
