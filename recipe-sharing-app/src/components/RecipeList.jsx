import  useRecipeStore  from './recipeStore.js';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';


const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filtredRecipes = useRecipeStore(state => state.filtredRecipes);

  return (
    <div>
      {filtredRecipes.map(recipe => (
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