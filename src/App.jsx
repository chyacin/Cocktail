import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';
import TheClassics from './component/Header/TheClassics';
import Create from './component/Header/Create';
import CocktailOfTheDay from './component/Header/CocktailOfTheDay';
import Favorites from './component/Header/Favorites';
import Navigation from './component/Header/Navigation';
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
    <BrowserRouter>
      <Header />
      <Navigation />
      <Route path="/" exact>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <CocktailList cocktails={cocktailList.filter(
          (cocktail) => cocktail.strDrink.toLowerCase().includes(query.toLowerCase()),
        )}
        />
      </Route>
      <Route path="/the-classics" exact component={TheClassics} />
      <Route path="/create" exact component={Create} />
      <Route path="/cocktail-of-the-day" exact component={CocktailOfTheDay} />
      <Route path="/favorites" exact component={Favorites} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
