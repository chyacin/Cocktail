import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul>
      <Link to="/cocktails">
        <p className="link">Home Page</p>
      </Link>
      <Link to="/lesincontournables">
        <p className="link">The Classics</p>
      </Link>
      <Link to="/créermoncocktail">
        <p className="link">Create!</p>
      </Link>
      <Link to="/cocktaildujour">
        <p className="link">Cocktail of the day</p>
      </Link>
      <Link to="/mesfavoris">
        <p className="link">Favorites</p>
      </Link>
    </ul>
  );
}

export default Navigation;
