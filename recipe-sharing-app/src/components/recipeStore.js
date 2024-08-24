import {create} from 'zustand'

const useRecipeStore = create(set => ({
    recipes: [],
    //add new recipe
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    //delete recipe
    deleteRecipe :  (id) => (state => set({
      recipes:[state.recipes.filter(recipe => recipe.id === id )]
    })),
    //update recipe
    updateRecipe : (id,title,description) => set(state=>({
      recipes :state.recipes.map(recipe=>{
        if(recipe.id===id)
          return {...recipe,id,description,title}
        else
          return recipe
      })
    }))
  }));
  
  export default useRecipeStore