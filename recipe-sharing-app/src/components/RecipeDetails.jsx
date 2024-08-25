import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';
import  useRecipeStore  from './recipeStore';
import { useParams,Link } from 'react-router-dom';

    //get the recipe id from the router
  const RecipeDetails = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );
   const addFavorite =useRecipeStore(state=>state.addFavorite) 
   console.log( useRecipeStore(state =>
    state.favorites))
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button
        onClick={e=>{
          addFavorite(recipeId);
          alert('recipe added to favorites')
          e.target.style.display = 'none'
          
        }}
        >add to favorites</button>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <EditRecipeForm recipeId={recipeId}/>
        <DeleteRecipeButton recipeId={recipeId}/>
        <Link to='/'>Recipes List</Link>
      </div>
    );
  };
  export default RecipeDetails