import { useState, useEffect } from "react";

function Search({ manageFavorite, setManageFavorite, setSearchValue, searchValue}) {
  const [value, setValue] = useState("")
  const [valueSearch, setValueSearch] = useState ("")

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleChange = () => {
    setValueSearch(searchValue); // Mettre à jour valueSearch avec la valeur actuelle de searchValue
    console.log(valueSearch); // Afficher la valeur mise à jour dans la console
    setSearchValue(""); // Réinitialiser la valeur de searchValue à une chaîne vide
  };

  return (
    <div>
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        {/* Vous pouvez ajouter un icône de recherche ici si nécessaire */}
      </span>
      <input
        className="placeholder-italic placeholder-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        name="search"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
    </label>
        <button onClick={() => handleChange()}>RESET</button>


        <svg onClick={() => setManageFavorite(!manageFavorite)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

        </div>
  );
}

export default Search;
