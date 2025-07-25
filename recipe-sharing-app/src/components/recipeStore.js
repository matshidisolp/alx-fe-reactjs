import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  setSearchTerm: (term) => {
    set({ searchTerm: term }, false, 'setSearchTerm');
    get().filterRecipes(); // Trigger filter when search term changes
  },

  setRecipes: (recipes) => {
    set({ recipes }, false, 'setRecipes');
    get().filterRecipes(); // Filter right after setting recipes
  },

  addRecipe: (recipe) => {
    const updatedRecipes = [...get().recipes, recipe];
    set({ recipes: updatedRecipes }, false, 'addRecipe');
    get().filterRecipes(); // Filter after adding
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updatedRecipes }, false, 'updateRecipe');
    get().filterRecipes(); // Filter after update
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes }, false, 'deleteRecipe');
    get().filterRecipes(); // Filter after delete
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered }, false, 'filterRecipes');
  },
}));
