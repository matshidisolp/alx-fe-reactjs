import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find(
          (item) => item.id === parseInt(id)
        );
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="p-6 text-center">Loading recipe...</p>;
  }

  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-10 bg-gray-50 min-h-screen">
      {/* Back link */}
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
        {recipe.title}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={`Image of ${recipe.title}`}
        className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md mb-8"
      />

      {/* Summary */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        {recipe.summary}
      </p>

      {/* Ingredients & Instructions side-by-side on desktop */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Ingredients */}
        {recipe.ingredients && (
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Instructions */}
        {recipe.instructions && (
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </main>
  );
}

export default RecipeDetail;
