import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
    return (
        <BrowserRouter>
         <Routes>
            <Route path= "/" element={<>
            <AddRecipeForm />
            <RecipeList />
            </>} />
            <Route path= "/recipe/:id" element={<RecipeDetailWrapper />} />
         </Routes>
        </BrowserRouter>
    );
};

//Wrapper to extract route param
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
    const { id } = useParams();
    return <RecipeDetails recipeId={id} />;
};

export default App;
