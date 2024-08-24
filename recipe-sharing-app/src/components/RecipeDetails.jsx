import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import  useRecipeStore  from './recipeStore';

    //get the recipe id from the router
  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
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