import React from 'react';
import recettes from "../../data/recettes.json";

const FavoritesContainer = ({ favorites, handleSortClose, handleRemoveFavorite, setFavorites }) => {
    console.log("testContainer", favorites);

    return (
        <div id="favorites-container" className="col-favorites background-texture">
          <div id="favorites-header-wrapper">
            <h2 className="text-gold hylia-font align-center">Toutes les recettes</h2>
            <div className="align-right">
            </div>
          </div>
<div id="favorites-row" className="row wrap">
  {favorites.length > 0 ? (
    favorites.map((favorite, index) => (
      <div key={index} className="favorite-item">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={favorite.imageUrl}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {favorite.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <button onClick={() => handleRemoveFavorite(favorite.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {favorite.category}
              </span>
            </div>
            <div className="flex-wrap flex justify-end">
              <p className="text-1xl text-gray-900 dark:text-white">
                {favorite.description}
              </p>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className='h-96'>
      <span>No recipes found.</span>
      </div>
  )}
</div>
        </div>
       
      );
    };
    

const Favori = ({ favorites, manageFavorite, setManageFavorite, setFavorites }) => {
    const handleSortClose = () => {
        setManageFavorite(!manageFavorite);
    };

    console.log("testContainerHi", favorites);

    const handleRemoveFavorite = (favoriteToRemove) => {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== favoriteToRemove);
        setFavorites(updatedFavorites);
    };

    return (
        <div id="favorites-view" className={`favorites-overlay ${manageFavorite ? '' : 'hidden'}`}>
            <div className="row end" id="favorites-container-row">
                <FavoritesContainer favorites={favorites} handleSortClose={handleSortClose} handleRemoveFavorite={handleRemoveFavorite} setFavorites={setFavorites} />
            </div>
        </div>
    );
};

export default Favori;