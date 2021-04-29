import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';
import SearchBar from '../SearchBar/SearchBar';

const CocktailList = ({ cocktails }) => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [query]);

  return (
    <>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <div className="contenu">
        { cocktails.filter(
          (cocktail) => (
            cocktail.strDrink.toLowerCase().includes(query.toLowerCase())
          ),
        ).slice(
          (page - 1) * 14, page * 14,
        ).map((cocktail) => (
          <Cocktail
            data={cocktail}
            key={cocktail.idDrink}
          />
        ))}
      </div>
      <div className="pagination">
        {page > 1 ? <button className="pagebutton" type="button" onClick={() => setPage(page - 1)}>Page précédente</button> : ''}
        <button className="pagebutton" type="button" onClick={() => setPage(page + 1)}>Page suivante</button>
      </div>
    </>
  );
};
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CocktailList;
