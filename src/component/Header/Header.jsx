import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './headerLogo.png';

const Header = () => (
  <header className="header">
    <img className="codeTailsImg" src={headerLogo} alt="logo" />
    <h1 contentEditable spellCheck="false">WELCOME</h1>
    <nav className="navlist">
      <Link className="link" to="/">
        Home Page
      </Link>
      <Link className="link" to="/create">
        Create Cocktail
      </Link>
      <Link className="link" to="/cocktail-of-the-day">
        Cocktail of the day
      </Link>
      <Link className="link" to="/favorites">
        Favorites
      </Link>
    </nav>
  </header>
);

export default Header;
