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
        <div>
          <Link className="link" to="/">
            Home Page
          </Link>
        </div>
        <div>
          <Link className="link" to="/create">
            Create Cocktail
          </Link>
        </div>
        <div>
          <Link className="link" to="/cocktail-of-the-day">
            Cocktail of the day
          </Link>
        </div>
        <div>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
