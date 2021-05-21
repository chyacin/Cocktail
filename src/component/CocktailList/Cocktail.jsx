import './CocktailList.css';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import IngredientList from './IngredientList';
import FavoriteButton from '../Header/FavoriteButton';

function Cocktail({ data, favorites, setFavorites }) {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-header">
          <FavoriteButton
            cocktail={data}
            favorites={favorites}
            setFavorites={setFavorites}
          />
          <img className="card-img" src={data.strDrinkThumb} alt="illustration" />
          <div className="card-body">
            <h2 className="card-title">{data.strDrink}</h2>
            <Modal>
              <>
                <h2 className="card-title">{data.strDrink}</h2>
                <img className="modal-img" src={data.strDrinkThumb} alt="illustration" />
                <IngredientList
                  ingredient1={data.strIngredient1}
                  ingredient2={data.strIngredient2}
                  ingredient3={data.strIngredient3}
                  ingredient4={data.strIngredient4}
                  ingredient5={data.strIngredient5}
                  ingredient6={data.strIngredient6}
                  instructions={data.strInstructions}
                />
              </>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
Cocktail.propTypes = {
  data: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strIngredient1: PropTypes.string,
    strIngredient2: PropTypes.string,
    strIngredient3: PropTypes.string,
    strIngredient4: PropTypes.string,
    strIngredient5: PropTypes.string,
    strIngredient6: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFavorites: PropTypes.func.isRequired,
};

export default Cocktail;
