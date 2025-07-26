import { create } from 'zustand';

// Store for managing global recipe state using Zustand
export const useRecipeStore = create((set, get) => ({
  // The main list of recipes in the app
  recipes: [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta dish with beef sauce',
      ingredients: ['pasta', 'beef', 'tomato', 'onion'],
      prepTime: 30
    },
    {
      id: 2,
      title: 'Grilled Chicken Salad',
      description: 'Fresh greens with grilled chicken breast',
      ingredients: ['chicken', 'lettuce', 'tomato', 'cucumber'],
      prepTime: 20
    },
    {
      id: 3,
      title: 'Chocolate Cake',
      description: 'Rich and moist chocolate cake',
      ingredients: ['flour', 'cocoa', 'sugar', 'eggs'],
      prepTime: 45
    }
  ],

  // Search and filter state
  searchTerm: '',               // Stores the search input from the user
  ingredientFilter: '',         // Stores the ingredient filter
  maxPrepTimeFilter: '',        // Stores the maximum preparation time

  // List of recipes after filtering
  filteredRecipes: [],

  // User's favorite recipes (stored as an array of recipe IDs)
  favorites: [],

  // Personalized recipe suggestions based on favorites
  recommendations: [],

  // Set search term and re-filter the recipe list
  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes();
  },

  // Set ingredient filter and re-filter
  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient }, false, 'setIngredientFilter');
    get().filterRecipes();
  },

  // Set max preparation time filter and re-filter
  setMaxPrepTimeFilter: (time) => {
    set({ maxPrepTimeFilter: time }, false, 'setMaxPrepTimeFilter');
    get().filterRecipes();
  },

  // Filters recipes based on search term, ingredient, and prep time
  filterRecipes: () => {
    const { recipes, searchTerm, ingredientFilter, maxPrepTimeFilter } = get();

    const filtered = recipes.filter((recipe) => {
      const matchesTitle = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIngredient = ingredientFilter
        ? recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(ingredientFilter.toLowerCase())
          )
        : true;

      const matchesPrepTime = maxPrepTimeFilter
        ? recipe.prepTime <= Number(maxPrepTimeFilter)
        : true;

      return matchesTitle && matchesIngredient && matchesPrepTime;
    });

    set({ filteredRecipes: filtered }, false, 'filterRecipes');
  },

  // Add a recipe to the favorites list
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])] // Ensures no duplicates
    }), false, 'addFavorite'),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId)
    }), false, 'removeFavorite'),

  // Generate recommendations randomly from favorites (demo logic)
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Picks random favorites to suggest again (just for demo)
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );

    set({ recommendations: recommended }, false, 'generateRecommendations');
  }
}));
