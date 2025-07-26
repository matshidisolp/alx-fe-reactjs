import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import AdvancedFilters from './components/AdvancedFilters';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/favorites">My Favorites</Link> |{' '}
        <Link to="/recommendations">Recommendations</Link>
      </nav>

      <Routes>
        {/* Home: Add, Search, Filter, List */}
        <Route
          path="/"
          element={
            <>
              <h1>Recipe Sharing App</h1>
              <AddRecipeForm />
              <SearchBar />
              <AdvancedFilters />
              <RecipeList />
            </>
          }
        />

        {/* Favorites Page */}
        <Route path="/favorites" element={<FavoritesList />} />

        {/* Recommendations Page */}
        <Route path="/recommendations" element={<RecommendationsList />} />

        {/* Recipe Details Page */}
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

// Wrapper to extract dynamic route param for details page
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
