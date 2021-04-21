import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './component/Footer/Footer';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    'abcdefghijklmnopqrstuvwxyz0123456789'.split('').forEach((letter) => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        .then((response) => response.json())
        .then((data) => data.drinks && setCocktailList(
          (previousValue) => [...previousValue, ...data.drinks],
        ));
    });
  }, []);
  return (
    <div>
      <Header />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CocktailList cocktails={cocktailList.filter(
        (cocktail) => cocktail.strDrink.toLowerCase().includes(query.toLowerCase()),
      )}
      />
      <Footer />
    </div>
  );
}

export default App;
