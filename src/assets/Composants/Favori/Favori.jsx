const FavoritesContainer = ({ favorites, handleRemoveFavorite, isFavorite }) => {
  // Affiche les favoris dans la console pour le débogage
  console.log("testContainer", favorites);

  return (
    <div id="favorites-container" className="col-favorites background-texture">
      {/* En-tête des favoris */}
      <div id="favorites-header-wrapper">
        <h2 className="text-green-900 font-medium text-2xl">Toutes les recettes</h2>
        <div className="align-right">
          {/* Contenu supplémentaire à ajouter ici si nécessaire */}
        </div>
      </div>

      {/* Affichage des recettes favorites */}
      <div id="favorites-row" className="row wrap flex-row flex-wrap gap-10 justify-center relative flex">
        {/* Vérifie s'il y a des favoris à afficher */}
        {favorites.length > 0 ? (
          // Affiche chaque favori
          favorites.map((favorite, index) => (
            <div key={index} className="flex favorite-item flex-row flex-wrap gap-10 justify-center relative">
              {/* Contenu de chaque favori */}
              {/* Affiche l'image de la recette */}
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="justify-end flex">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={favorite.imageUrl}
                      alt="product image"
                    />
                  </a>
                  {/* Bouton de suppression de favori */}
                  <button className="absolute p-2 text-white" onClick={() => handleRemoveFavorite(favorite.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={isFavorite ? "none" : "white"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={isFavorite ? "none" : "white"}
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
                {/* Contenu détaillé de la recette */}
                <div className="p-2">
                  {/* Détails de la recette */}
                  <div className="px-5">
                    {/* Affiche le nom de l'auteur */}
                    <div className="flex items-center mt-2.5 mb-5 flex flex-wrap gap-4 items-center">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>john Doe</span>
                      </div>
                      {/* Affiche la difficulté de la recette */}
                      <span className="flex">
                        {Array.from({ length: favorite.difficulty }, (_, index) => (
                          <svg
                            key={index}
                            className="w-4 h-4 text-yellow-300 relative"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        ))}
                      </span>
                      {/* Affiche la catégorie de la recette */}
                      <span className="flex gap-2 items-center bg-red-700 px-2 text-white rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="w-4 h-4"><path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd"></path></svg>
                        {favorite.category}
                      </span>
                    </div>
                  </div>
                  {/* Description de la recette */}
                  <div className="flex-wrap flex justify-end ">
                    <p className="text-1xl text-gray-900 dark:text-white">
                      {favorite.description}
                    </p>
                    <div className="p-2 text-right mt-auto">
                      <a href="#" className="font-medium ">
                        En savoir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Affiche un message s'il n'y a pas de favoris
          <div className='h-96 flex justify-start'>
            <span>Aucune recette trouvée.</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Favori = ({ favorites, manageFavorite, setManageFavorite, setFavorites, isFavorite, setIsFavorite }) => {
  // Gère la fermeture de la vue des favoris
  const handleSortClose = () => {
    setManageFavorite(!manageFavorite);
  };

  // Supprime un favori de la liste des favoris
  const handleRemoveFavorite = (favoriteToRemove) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== favoriteToRemove);
    setFavorites(updatedFavorites);
  };

  // Affiche les favoris dans la console pour le débogage
  console.log("testContainerHi", favorites);

  return (
    <div id="favorites-view" className={`favorites-overlay ${manageFavorite ? '' : 'hidden'}`}>
      <div className="row end" id="favorites-container-row">
        {/* Affiche le composant FavoritesContainer */}
        <FavoritesContainer favorites={favorites} handleSortClose={handleSortClose} handleRemoveFavorite={handleRemoveFavorite} setFavorites={setFavorites} isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      </div>
    </div>
  );
};

export default Favori;
