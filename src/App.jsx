import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Footer from './component/Footer/Footer';
import Home from './component/Home';
import Header from './component/Header/Header';
import CreateCocktail from './component/Header/CreateCocktail';
import CocktailOfTheDay from './component/Header/CocktailOfTheDay';
import Favorites from './component/Header/Favorites';
import useLocalStorage from './component/Header/useLocalStorage';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [favorites, setFavorites] = useLocalStorage('favorite-cocktails', []);

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
          const mappedCocktails = response.data.drinks.map((cocktail) => {
            const ingredients = [];

            for (let i = 1; i <= 15; i += 1) {
              const ingredient = cocktail[`strIngredient${i}`];
              if (ingredient != null && ingredient !== '') {
                ingredients.push(ingredient.toLowerCase());
              }
            }

            return { ...cocktail, strIngredients: ingredients };
          });
          return [
            ...acc,
            ...mappedCocktails.sort((a, b) => a.strDrink.localeCompare(b.strDrink)),
          ];
        }, []),
      );
    });
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main>
        <Route path="/" exact>
          <Home
            cocktails={cocktailList}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route path="/create" exact>
          <CreateCocktail
            cocktails={cocktailList}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route path="/cocktail-of-the-day" exact>
          <CocktailOfTheDay
            cocktails={cocktailList}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
