import {create} from 'zustand'
const initialrecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    description: "A flavorful Indian curry made with marinated chicken chunks in a spiced tomato cream sauce."
  },
  {
    id: 3,
    title: "Vegetable Stir-Fry",
    description: "A quick and healthy stir-fry with a mix of fresh vegetables and a savory soy sauce glaze."
  },
  {
    id: 4,
    title: "Beef Tacos",
    description: "Delicious tacos filled with seasoned ground beef, lettuce, cheese, and salsa."
  },
  {
    id: 5,
    title: "Chocolate Chip Cookies",
    description: "Classic cookies loaded with chocolate chips, perfect for a sweet treat."
  }
];

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
    })),
    //set search term
    searchTerm : '',
    setSearchTerm : term=>set({searchTerm:term}), 
    //filtred recipes 
    filtredRecipes : [],
    //filter recipes by search term 
    filterRecipes : () => set(state=>({
      filtredRecipes : state.recipes.filter(recipe=>
         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }))
  }));
  
  export default useRecipeStore