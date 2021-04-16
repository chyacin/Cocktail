import React, { useState, useEffect } from 'react';
import './App.css';
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
