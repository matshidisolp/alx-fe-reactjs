import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
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

  // 🔍 Filters
  searchTerm: '',
  ingredientFilter: '',
  maxPrepTimeFilter: '',

  // 📃 Filtered results
  filteredRecipes: [],

  // 🔧 Setters
  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes();
  },

  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient }, false, 'setIngredientFilter');
    get().filterRecipes();
  },

  setMaxPrepTimeFilter: (time) => {
    set({ maxPrepTimeFilter: time }, false, 'setMaxPrepTimeFilter');
    get().filterRecipes();
  },

  // 🧠 Filtering logic
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
  }
}));
