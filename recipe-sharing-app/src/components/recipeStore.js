import {create} from 'zustand'
const initialrecipes = [
  {id:1,title:'recipe 1' ,description :'make this recipe...'},
  {id:2,title:'recipe 2' ,description :'make this recipe...'},
  {id:3,title:'recipe 3' ,description :'make this recipe...'},
  {id:4,title:'recipe 4' ,description :'make this recipe...'},
]
const useRecipeStore = create(set => ({
    recipes: initialrecipes,
    //add new recipe
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
    //delete recipe
    deleteRecipe: (id) => set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
    //update recipe
    updateRecipe : (id,title,description) => set(state=>({
      recipes :state.recipes.map(recipe=>{
        if(recipe.id===id)
        {
          // console.log('added')
          return {...recipe,title,description}
        }
        else
          return recipe
      })
    }))
  }));
  
  export default useRecipeStore