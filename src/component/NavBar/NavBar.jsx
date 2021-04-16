import React from 'react';
import './NavBar.css';

const NavBar = () => (
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
);

export default NavBar;
