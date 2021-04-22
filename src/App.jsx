import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';
import LesIncontournables from './component/Header/LesIncontournables';
import CréerMonCocktail from './component/Header/CréerMonCocktail';
import CocktailDuJour from './component/Header/CocktailDuJour';
import MesFavoris from './component/Header/MesFavoris';
import Navigation from './component/Header/Navigation';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
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
      <Route path="/lesincontournables" exact component={LesIncontournables} />
      <Route path="/créermoncocktail" exact component={CréerMonCocktail} />
      <Route path="/cocktaildujour" exact component={CocktailDuJour} />
      <Route path="/mesfavoris" exact component={MesFavoris} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
