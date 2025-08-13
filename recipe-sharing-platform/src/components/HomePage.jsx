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
    <main className="p-4 sm:p-6 lg:p-10 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid */}
      <section
        aria-label="List of recipes"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={`Image of ${recipe.title}`}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 flex-grow">
                {recipe.summary}
              </p>

              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 inline-block text-center text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              >
                View Details
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default HomePage;
