import './Header.css';
import React from 'react';
import headerLogo from './headerLogo.jpg';

const Header = () => (
  <header className="header">
    <img className="codeTailsImg" src={headerLogo} alt="logo" />
    <h1 contentEditable spellCheck="false">Wild Code&apos;Tails</h1>
    <nav className="navbar">
      <div className="links">
        <ul>
          <li><button type="button">Les incontournables</button></li>
          <li><button type="button">Créer mon cocktail</button></li>
          <li><button type="button">Cocktail du jour</button></li>
          <li><button type="button">Ma sélection</button></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
