import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import  useRecipeStore  from './recipeStore';
import { useParams } from 'react-router-dom';

    //get the recipe id from the router
  const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <EditRecipeForm recipeId={recipeId}/>
        <DeleteRecipeButton recipeId={recipeId}/>
      </div>
    );
  };
  export default RecipeDetails