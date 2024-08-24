import { useState } from 'react';
  import  useRecipeStore  from './recipeStore.js';

  const EditRecipeForm = ({recipeId}) => {
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      updateRecipe(recipeId,title,description)
      setTitle('');
      setDescription('');
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