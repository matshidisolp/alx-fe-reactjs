import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Recipe Sharing Platform
        </h1>
        
      <div className="grid gap-8 sm:grid-cols 2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration 300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-full">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
                </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {recipe.summary}
                </p>

              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
