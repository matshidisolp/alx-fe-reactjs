import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // Only show recipes that are in the favorites list
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ))
      )}
      <Link to="/">🔙 Back to Recipes</Link>
    </div>
  );
};

export default Favorites;