import React, { useState, useEffect } from 'react';
import './App.css';

import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />

import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m')
      .then((response) => response.json())
      .then((data) => setCocktailList(data.drinks));
  }, []);
  return (
    <div>
      <Header />
      <CocktailList cocktails={cocktailList} />

    </div>
  );
}

export default App;
