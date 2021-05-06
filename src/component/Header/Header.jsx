import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLogo from './headerLogo.png';

const Header = () => (
  <header className="header">
    <div className="gridstyle">
      <img className="codeTailsImg" src={headerLogo} alt="logo" />
      <h1>WELCOME TO WILD CODE&apos;TAILS</h1>
    </div>
    <div className="thefourth">
      <nav className="navlist">

        <NavLink className="link" activeClassName="active" exact to="/">
          Search
        </NavLink>

        <NavLink className="link" activeClassName="active" exact to="/create">
          Create
        </NavLink>

        <NavLink className="link" activeClassName="active" exact to="/cocktail-of-the-day">
          Cocktail of the day
        </NavLink>

        <NavLink className="link" activeClassName="active" exact to="/favorites">
          Favorites
        </NavLink>

      </nav>
    </div>
  </header>
);

export default Header;
