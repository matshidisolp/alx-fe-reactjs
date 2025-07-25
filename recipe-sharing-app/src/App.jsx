import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import AdvancedFilters from './components/AdvancedFilters';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Main Page: Add, Search, Filter, List */}
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
        
        {/* 📄 Recipe Details Page */}
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

// 🔁 Wrapper to extract dynamic route param for details page
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
