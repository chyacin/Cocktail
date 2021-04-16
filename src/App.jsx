import React from 'react';
import './App.css';
import CocktailList from './component/CocktailList/CocktailList';
import Header from './component/Header/Header';

const cocktailList = [
  {
    name: 'Mojito',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/12/35/mojito-698499_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
  {
    name: 'Margarita',
    image: 'https://cdn.pixabay.com/photo/2014/08/11/08/37/margarita-415360_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
  {
    name: 'Old Fashionned',
    image: 'https://cdn.pixabay.com/photo/2020/05/09/01/17/cocktail-5147805_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
  {
    name: 'Cuba libre',
    image: 'https://cdn.pixabay.com/photo/2017/07/20/23/23/cuba-libre-2524121_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
  {
    name: 'Bloody mary',
    image: 'https://cdn.pixabay.com/photo/2018/04/27/11/49/glass-3354442_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
  {
    name: 'Negroni',
    image: 'https://cdn.pixabay.com/photo/2016/12/02/05/09/alcohol-1876873_960_720.jpg',
    recette: 'chips,pate,bolo',
  },
];

function App() {
  return (
    <div>
      <Header />
      <CocktailList cocktails={cocktailList} />
    </div>
  );
}

export default App;
