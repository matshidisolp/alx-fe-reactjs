import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handlleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); //After deletion, redirect to home or recipe list
  };

  return (
    <button onClick={handleDelete}>
        Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
