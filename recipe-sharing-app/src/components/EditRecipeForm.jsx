import { useState } from 'react';
  import  useRecipeStore  from './recipeStore.js';
  import { useParams } from 'react-router-dom';

  const EditRecipeForm = () => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {recipeId} = useParams()
    const id = parseInt(recipeId,10)

    const handleSubmit = (event) => {
      event.preventDefault();
      updateRecipe(id,title,description)
      setTitle('');
      setDescription('');
      console.log(useRecipeStore.getState().recipes)
    };

    return (
      <form onSubmit={handleSubmit}>
        <h1>Edit Recipe Details</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
    );
  };

  export default EditRecipeForm