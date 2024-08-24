import  useRecipeStore  from './recipeStore.js';
import { Link } from 'react-router-dom';


const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <div className='recipe' key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/Recipe-Details/${recipe.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList