import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="ullist">
      <Link to="/">
        <p className="link">Home Page</p>
      </Link>
      <Link to="/the-classics">
        <p className="link">The Classics</p>
      </Link>
      <Link to="/create">
        <p className="link">Create</p>
      </Link>
      <Link to="/cocktail-of-the-day">
        <p className="link">Cocktail of the day</p>
      </Link>
      <Link to="/favorites">
        <p className="link">Favorites</p>
      </Link>
    </ul>
  );
}

export default Navigation;
