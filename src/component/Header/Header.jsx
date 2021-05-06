import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './headerLogo.png';

const Header = () => (
  <header className="header">
    <div className="gridstyle">
      <img className="codeTailsImg" src={headerLogo} alt="logo" />
      <h1>WELCOME TO WILD CODE&apos;TAILS</h1>
    </div>
    <div className="thefourth">
      <nav className="navlist">

        <Link className="link" to="/">
          Search
        </Link>

        <Link className="link" to="/create">
          Create
        </Link>

        <Link className="link" to="/cocktail-of-the-day">
          Try me !
        </Link>

        <Link className="link" to="/favorites">
          Favorites
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
