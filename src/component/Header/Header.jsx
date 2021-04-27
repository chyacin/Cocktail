import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './headerLogo.png';

const Header = () => (
  <header className="header">
    <img className="codeTailsImg" src={headerLogo} alt="logo" />
    <h1 contentEditable spellCheck="false">WELCOME</h1>
    <ul className="ullist">
      <Link to="/">
        <p className="link">Home Page</p>
      </Link>
      <Link to="/the-classics">
        <p className="link">The Classics</p>
      </Link>
      <Link to="/create">
        <p className="link">Create Cocktail</p>
      </Link>
      <Link to="/cocktail-of-the-day">
        <p className="link">Cocktail of the day</p>
      </Link>
      <Link to="/favorites">
        <p className="link">Favorites</p>
      </Link>
    </ul>
  </header>
);

export default Header;
