import { useRecipeStore } from '../components/recipeStore';

const AdvancedFilters = () => {
  const ingredientFilter = useRecipeStore(state => state.ingredientFilter);
  const maxPrepTimeFilter = useRecipeStore(state => state.maxPrepTimeFilter);
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const setMaxPrepTimeFilter = useRecipeStore(state => state.setMaxPrepTimeFilter);

  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="ingredient">Filter by Ingredient: </label>
        <input
          id="ingredient"
          type="text"
          placeholder="e.g. chicken"
          value={ingredientFilter}
          onChange={(e) => setIngredientFilter(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="prepTime">Max Prep Time (minutes): </label>
        <input
          id="prepTime"
          type="number"
          placeholder="e.g. 30"
          value={maxPrepTimeFilter}
          onChange={(e) => setMaxPrepTimeFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AdvancedFilters;