import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Footer from './component/Footer/Footer';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';
import CreateCocktail from './component/Header/CreateCocktail';
import CocktailOfTheDay from './component/Header/CocktailOfTheDay';
import Favorites from './component/Header/Favorites';
import SearchBar from './component/SearchBar/SearchBar';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all(
      'abcdefghijklmnopqrstuvwxyz0123456789'.split('').map((letter) => (
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      )),
    ).then((responses) => {
      setCocktailList(
        responses.reduce((acc, response) => {
          if (response.data.drinks == null) {
            return acc;
          }
          return [
            ...acc,
            ...response.data.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink)),
          ];
        }, []),
      );
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <SearchBar getQuery={(q) => setQuery(q)} />
        <CocktailList cocktails={cocktailList.filter(
          (cocktail) => (
            cocktail.strDrink.toLowerCase().includes(query.toLowerCase())
          ),
        ).slice(
          (page - 1) * 14, page * 14,
        )}
        />
        <div className="pagination">
          {page > 1 ? <button className="pagebutton" type="button" onClick={() => setPage(page - 1)}>Page précédente</button> : ''}
          <button className="pagebutton" type="button" onClick={() => setPage(page + 1)}>Page suivante</button>
        </div>
      </Route>
      <Route path="/create" exact component={CreateCocktail}>
        <CreateCocktail cocktails={cocktailList} />
      </Route>
      <Route path="/cocktail-of-the-day" exact>
        <CocktailOfTheDay cocktails={cocktailList} />
      </Route>
      <Route path="/favorites" exact component={Favorites} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
