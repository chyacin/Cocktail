import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <Link to="/cocktails">
        <p className="links">Home Page</p>
      </Link>
      <Link to="/lesincontournables">
        <p className="links">Les Incontournables</p>
      </Link>
      <Link to="/créermoncocktail">
        <p className="links">Créer mon cocktail</p>
      </Link>
      <Link to="/cocktaildujour">
        <p className="links">Cocktail du jour</p>
      </Link>
      <Link to="/mesfavoris">
        <p className="links">Mes Favoris</p>
      </Link>
    </ul>
  );
}

export default Navigation;
