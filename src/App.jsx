import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Search from "./assets/Composants/Search/Search";
import Header from "./assets/Composants/Header/Header";
import Footer from "./assets/Composants/Footer/Footer";
import ApiK from "./assets/Composants/ApiK/ApiK";
import Favori from "./assets/Composants/Favori/Favori.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [manageFavorite, setManageFavorite] = useState(false);
  const [manageSort, setManageSort] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteToggle = (id) =>  {
    // Toggle favorite status for the element with given id
    const updatedFavorites = favorites.map((element) => {
     return element.id === id ? { ...element, favorite: !element.favorite } : element ;
     
});


setFavorites(updatedFavorites);}

  return (
    <>
      <Header />
      <h1>Let's Cook</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} setManageFavorite={setManageFavorite}
    manageFavorite={manageFavorite} />
      <Favori
    setManageFavorite={setManageFavorite}
    manageFavorite={manageFavorite}
    favorites={favorites} 
    setFavorites={setFavorites} 
    handleRemoveFavorite={handleFavoriteToggle}
    setManageSort={setManageSort}
    manageSort={manageFavorite}
/>
     
      <ApiK searchValue={searchValue} setSearchValue={setSearchValue} favorites={favorites} setFavorites={setFavorites} onFavoriteToggle={handleFavoriteToggle}  setManageFavorite={setManageFavorite}
    manageFavorite={manageFavorite} />
      <Footer />

    </>
  );
}



export default App;
