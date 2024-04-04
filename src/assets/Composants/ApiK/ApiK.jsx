import recettes from "../../data/recettes.json";
import { useState, useEffect } from "react";

function ApiK({ searchValue, setSearchValue, favorites, setFavorites, manageSort, manageFavorite, setManageFavorite}) {
  const [card, setCard] = useState([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);

  useEffect(() => {
    // Chargement des données initiales
    FetchData();
  }, []);


  const FetchData = () => {
    // Utilisation directe des données importées
    setCard(recettes);
  };

  useEffect(() => {
    // Filtrage des données en fonction de la recherche
    if (searchValue && searchValue.length > 0) {
      const resultFilter = recettes.filter((cardUnique) =>
        cardUnique.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (resultFilter.length > 0) {
        setCard(resultFilter);
        setIsSearchEmpty(false);
      } else {
        setIsSearchEmpty(true);
      }
    } else {
      setCard(recettes);
      setIsSearchEmpty(false);
    }
  }, [searchValue]);

  const handleAddFavorite = (id) => {
    const updatedCard = card.map((item) =>
      item.id === id ? { ...item, favorite: true } : item
    );
    setCard(updatedCard);
    const favoriteElement = card.find((item) => item.id === id);
    setFavorites([...favorites, favoriteElement]);
  };


  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((element) => element.id !== id);
    setFavorites(updatedFavorites);
    const updatedCard = card.map((item) =>
      item.id === id ? { ...item, favorite: false } : item
    );
    setCard(updatedCard);
    console.log(updatedCard);
  };

  return (
    <div className={`flex-row flex-wrap gap-10 justify-center ${!manageFavorite ? "flex" : "hidden" }`}>
      {isSearchEmpty ? (
        <div>Aucun résultat trouvé</div>
      ) : (
        card.map((Element, id) => (
          <div
            key={id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={Element.imageUrl}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {Element.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <button
                    onClick={() =>
                      Element.favorite
                        ? handleRemoveFavorite(Element.id)
                        : handleAddFavorite(Element.id) 
                    }
                  >
                    {Element.favorite ? (
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
                    ) : (
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
                    )}
                  </button>
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
                {Array.from({ length: Element.difficulty }, (_, index) => (
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
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {Element.category}
              </span>
            </div>
            <div className="flex-wrap flex justify-end">
              <p className="text-1xl text-gray-900 dark:text-white">
                {Element.description}
              </p>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                En savoir plus
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ApiK;