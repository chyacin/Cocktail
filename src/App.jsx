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
      <Route path="/cocktails" exact>
        <CocktailList cocktails={cocktailList} />
      </Route>
      <Route path="/lesincontournables" exact component={TheClassics} />
      <Route path="/créermoncocktail" exact component={Create} />
      <Route path="/cocktaildujour" exact component={CocktailOfTheDay} />
      <Route path="/mesfavoris" exact component={Favorites} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
