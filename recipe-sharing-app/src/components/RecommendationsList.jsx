import React from 'react';
import { useRecipeStore } from '../recipeStore'; // ✅ Adjust path if needed
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const getRecommendations = useRecipeStore((state) => state.getRecommendations);
  const recommendations = getRecommendations(); // 👈 call the function directly to get the list

  return (
    <div>
      <h2>Recommended Recipes</h2>

      {recommendations.length === 0 ? (
        <p>No recommendations available. Try adding some favorites first.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}

      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecommendationsList;
