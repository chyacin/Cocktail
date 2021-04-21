import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

function SearchBar({ getQuery }) {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div className="searchBar">
      <input
        type="search"
        className="form-control"
        placeholder="Search Cocktails"
        results="0"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default SearchBar;
