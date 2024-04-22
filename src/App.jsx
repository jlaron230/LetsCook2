import { useState } from "react"; // Importation des modules React nécessaires ainsi que du hook useState pour gérer les états locaux

import Search from "./assets/Composants/Search/Search"; // Importation du composant de recherche
import Header from "./assets/Composants/Header/Header"; // Importation du composant d'en-tête
import Footer from "./assets/Composants/Footer/Footer"; // Importation du composant de pied de page
import ApiK from "./assets/Composants/ApiK/ApiK"; // Importation du composant ApiK
import Favori from "./assets/Composants/Favori/Favori"; // Importation du composant de favoris

function App() { // Début de la définition du composant principal de l'application
  // Déclaration des états locaux pour la valeur de recherche, la gestion des favoris et la liste de favoris
  const [searchValue, setSearchValue] = useState("");
  const [manageFavorite, setManageFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, SetisFavorite] = useState(false);

  // Fonction pour basculer le statut des favoris pour l'élément avec l'ID donné
  const handleFavoriteToggle = (id) => {
    // Mise à jour des favoris en fonction de l'ID de l'élément
    const updatedFavorites = favorites.map((element) =>
      element.id === id ? { ...element, favorite: !element.favorite } : element
    );
    setFavorites(updatedFavorites); // Met à jour la liste de favoris
  };

  // Rendu des composants
  return (
    <>
      {/* Composant Header */}
      <Header />

      <main className="container mx-auto px-1 py-8">
        {/* Titre de l'application */}
        <h1 className="my-4 text-6xl text-red-600">Let's Cook</h1>

        {/* Composant Search */}
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setManageFavorite={setManageFavorite}
          manageFavorite={manageFavorite}
        />

        {/* Composant Favori */}
        <Favori
          favorites={favorites}
          setFavorites={setFavorites}
          handleRemoveFavorite={handleFavoriteToggle}
          manageFavorite={manageFavorite}
          setManageFavorite={setManageFavorite}
          isFavorite={isFavorite}
          setIsFavorite={SetisFavorite}
        />

        {/* Composant ApiK */}
        <ApiK
          searchValue={searchValue}
          favorites={favorites}
          isFavorite={isFavorite}
          setIsFavorite={SetisFavorite}
          setFavorites={setFavorites}
          manageFavorite={manageFavorite}
        />

        {/* Affichage de la liste de favoris dans la console */}
        {console.log(favorites ? "ok" : "not")}
      </main>

      {/* Composant Footer */}
      <Footer />
    </>
  );
}

export default App; // Exportation du composant principal