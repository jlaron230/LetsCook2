# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Mode d'emploi - Projet Let's cook 2
Bienvenue dans notre application de recettes de cuisine ! Pour vous aider à tirer le meilleur parti de notre projet, voici un guide étape par étape pour vous orienter :


Voici la procédure d'utilisation pour l'application de recettes de cuisine :

Mode d'Emploi - Application de Recettes de Cuisine :
1. Accès à l'Application :
Ouvrez votre navigateur web et accédez à l'URL où l'application est hébergée.
2. Navigation dans l'Application :
Lorsque la page se charge, vous verrez l'en-tête de l'application contenant le titre et éventuellement un menu de navigation.
3. Recherche de Recettes :
Utilisez la barre de recherche située à un emplacement visible pour rechercher des recettes. Tapez simplement le nom de la recette que vous souhaitez trouver et appuyez sur "Entrée" ou cliquez sur le bouton de recherche.
4. Affichage des Résultats :
Une fois la recherche effectuée, les résultats correspondant à votre recherche seront affichés sur la page principale de l'application. Chaque résultat peut inclure une image, le nom de la recette et une brève description.
5. Sélection de Recettes Favoris :
Si vous trouvez une recette que vous aimez, vous pouvez la sélectionner comme favorite en cliquant sur un bouton ou une icône dédiée associée à la recette. Cela ajoutera la recette à votre liste de favoris.
6. Consultation des Recettes Favorites :
Vous pouvez accéder à vos recettes favorites en naviguant vers la section dédiée, généralement accessible via le menu ou une icône spécifique dans l'interface de l'application.
7. Suppression des Recettes des Favoris :
Si vous souhaitez retirer une recette de vos favoris, vous pouvez le faire en cliquant sur un bouton ou une icône dédiée associée à la recette dans la liste des favoris.
8. Exploration Continue :
Continuez à utiliser la barre de recherche et à parcourir les résultats pour découvrir de nouvelles recettes et ajouter celles que vous aimez à vos favoris.
9. Fin de la Session :
Lorsque vous avez terminé d'utiliser l'application, vous pouvez simplement fermer l'onglet ou le navigateur pour quitter.


Structure du projet : index.html : Fichier principal de l'application contenant la structure de base de la page web.
index.css : Fichier de feuilles de style CSS pour la mise en forme de l'application.
App.jsx : Fichier JavaScript principal contenant la logique de l'application.
assets : Dossier contenant les ressources statiques telles que les images, les icônes, etc.

Ressources : 
Framework css : https://tailwindui.com/
Images : https://unsplash.com/fr

2. Dossier "assets" :
imgages : Dossier contenant les images utilisées dans l'application.
components : Dossier contenant les composants réutilisables de l'application, tels que le header, le footer, la barre de recherche, etc.


## Structure du Projet de Recettes de Cuisine :

1. Dossier Racine :
index.html : Fichier principal de l'application contenant la structure de base de la page web.
styles.css : Fichier de feuilles de style CSS pour la mise en forme de l'application.
script.js : Fichier JavaScript principal contenant la logique de l'application.
assets : Dossier contenant les ressources statiques telles que les images, les icônes, etc.

2. Dossier "assets" :
img : Dossier contenant les images utilisées dans l'application.
fonts : Dossier contenant les fichiers de police utilisés dans l'application.
components : Dossier contenant les composants réutilisables de l'application, tels que le header, le footer, la barre de recherche, etc.

3. Dossier "components" :
Header : Dossier contenant les fichiers liés à l'en-tête de l'application.
Header.jsx : Composant React pour l'en-tête.
Footer : Dossier contenant les fichiers liés au pied de page de l'application.
Footer.jsx : Composant React pour le pied de page.
data : Dossier contenant les fichiers liés à l'affichage des recettes.
Recettes.json : Le fichier Json des recettes.
Search : Dossier contenant le fichier lié à la barre de recherche.
Search.jsx : Composant React pour la barre de recherche.
SearchBar.css : Fichier de styles spécifiques à la barre de recherche.
Favori : Dossier contenant le fichier lié à la gestion des recettes favorites.
Favori.jsx : Composant React pour afficher et gérer les recettes favorites.
Apik : Dossier contenant le fichier lié a l'affichage des recettes et a la gestion des favoris et de la searchbar.
Apik.jsx : le fichier lié a l'affichage des recettes et a la gestion des favoris et de la searchbar.