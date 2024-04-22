import { useState, useEffect } from "react";

function Search({ manageFavorite, setManageFavorite, setSearchValue, searchValue }) {
  // Déclaration de deux états locaux pour la valeur de l'entrée de recherche et la valeur de recherche
  const [valueSearch, setValueSearch] = useState("");

  // Gestion du changement de la valeur de l'entrée de recherche
  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Gestion du changement du mode de gestion des favoris
  const handleChange = () => {
    setValueSearch(searchValue); // Mettre à jour valueSearch avec la valeur actuelle de searchValue
    console.log(valueSearch); // Afficher la valeur mise à jour dans la console
    setSearchValue(""); // Réinitialiser la valeur de searchValue à une chaîne vide
  };

  return (
    <div className="mt-8 mb-2">
      <form className="flex items-center gap-4">
        <label className="relative block grow">
          {/* Placeholder pour l'icône de recherche */}
          <input
            className="placeholder:italic placeholder:text-red-400 block bg-white w-full border border-red-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </label>

        {/* Bouton pour changer le mode de gestion des favoris */}
        <div className="text-center px-4 py-2 font-semibold border border-red-600 rounded-md transition-colors duration-300 
                  text-gray-400 hover:text-gray-600 ">
          <svg onClick={() => setManageFavorite(!manageFavorite)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          {console.log(manageFavorite)}
        </div>

        {/* Bouton pour réinitialiser la recherche */}
        <div className="min-w-16 text-center px-4 py-2 text-white font-semibold rounded-md transition-colors duration-300 bg-red-800 hover:bg-red-700">
          <button onClick={() => handleChange()}>RESET</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
