import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
      <label htmlFor="search" style={{ fontWeight: 'bold' }}>Search Recipes:</label>
      <input
        id="search"
        type="text"
        placeholder="e.g. pasta or chocolate"
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '8px',
          width: '200px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <button onClick={handleReset} style={{ padding: '8px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px' }}>
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
