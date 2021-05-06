import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';

const CocktailList = ({ cocktails, favorites, setFavorites }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [cocktails]);

  return (
    <>
      <div className="contenu">
        { cocktails.slice(
          (page - 1) * 14, page * 14,
        ).map((cocktail) => (
          <Cocktail
            data={cocktail}
            key={cocktail.idDrink}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
      </div>
      <div className="pagination">
        {
          (page > 1) && (
            <button
              className="pagebutton"
              type="button"
              onClick={() => setPage(page - 1)}
            >
              Previous page
            </button>
          )
        }
        {
          (page * 14 < cocktails.length) && (
            <button
              className="pagebutton"
              type="button"
              onClick={() => setPage(page + 1)}
            >
              Next page
            </button>
          )
        }
      </div>
    </>
  );
};
CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};
export default CocktailList;
