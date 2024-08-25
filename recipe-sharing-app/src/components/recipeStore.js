import {create} from 'zustand'
const initialrecipes = [
  { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper." },
  { id: 2, title: "Chicken Alfredo", description: "Creamy Alfredo sauce served over fettuccine and topped with grilled chicken." },
  { id: 3, title: "Beef Stroganoff", description: "Tender beef strips cooked in a creamy mushroom sauce, served over noodles." },
  { id: 4, title: "Vegetable Stir-fry", description: "Mixed vegetables sautéed in a savory soy sauce, served with rice or noodles." },
  { id: 5, title: "Chicken Tikka Masala", description: "Marinated chicken cooked in a creamy tomato-based curry sauce, served with rice." },
  { id: 6, title: "Shrimp Scampi", description: "Garlicky shrimp cooked in butter and white wine, served over pasta." },
  { id: 7, title: "Mushroom Risotto", description: "Creamy arborio rice cooked with mushrooms and Parmesan cheese." },
  { id: 8, title: "Pulled Pork Sandwich", description: "Slow-cooked pulled pork served in a sandwich with barbecue sauce." },
  { id: 9, title: "Vegetarian Chili", description: "Hearty chili made with beans, vegetables, and spices." },
  { id: 10, title: "Fish Tacos", description: "Grilled fish served in soft tortillas with a tangy slaw and lime crema." },
  { id: 11, title: "Margherita Pizza", description: "Classic pizza topped with fresh tomatoes, mozzarella, and basil." },
  { id: 12, title: "Eggplant Parmesan", description: "Breaded and baked eggplant slices layered with marinara sauce and cheese." },
  { id: 13, title: "Lamb Curry", description: "Tender lamb cooked in a spicy, flavorful curry sauce, served with rice." },
  { id: 14, title: "Chicken Caesar Salad", description: "Crisp romaine lettuce, grilled chicken, Parmesan, and Caesar dressing." },
  { id: 15, title: "Stuffed Bell Peppers", description: "Bell peppers filled with rice, ground beef, and vegetables, baked with cheese." },
  { id: 16, title: "Pad Thai", description: "A Thai dish made with stir-fried rice noodles, vegetables, and a tamarind sauce." },
  { id: 17, title: "BBQ Ribs", description: "Tender ribs slow-cooked and slathered in a smoky barbecue sauce." },
  { id: 18, title: "Chicken Quesadilla", description: "Grilled tortillas filled with melted cheese and seasoned chicken." },
  { id: 19, title: "Butternut Squash Soup", description: "Creamy soup made with roasted butternut squash and spices." },
  { id: 20, title: "Falafel Wrap", description: "Crispy falafel served in a wrap with lettuce, tomatoes, and tahini sauce." },
  { id: 21, title: "Sushi Rolls", description: "Rice, seafood, and vegetables rolled in seaweed and sliced into bite-sized pieces." },
  { id: 22, title: "Greek Salad", description: "Fresh salad with cucumbers, tomatoes, olives, feta cheese, and olive oil dressing." },
  { id: 23, title: "Pancakes", description: "Fluffy pancakes served with butter and maple syrup." },
  { id: 24, title: "Lasagna", description: "Layers of pasta, meat sauce, and cheese, baked to perfection." },
  { id: 25, title: "Chicken and Waffles", description: "Crispy fried chicken served on top of fluffy waffles with syrup." },
  { id: 26, title: "Clam Chowder", description: "Creamy soup made with clams, potatoes, and bacon." },
  { id: 27, title: "Beef Tacos", description: "Ground beef seasoned with taco spices, served in crispy taco shells with toppings." },
  { id: 28, title: "French Onion Soup", description: "Rich soup made with caramelized onions, beef broth, and melted cheese." },
  { id: 29, title: "Chicken Fried Rice", description: "Stir-fried rice with chicken, vegetables, and soy sauce." },
  { id: 30, title: "Chocolate Cake", description: "Moist chocolate cake topped with rich chocolate frosting." }
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
    })),
    //favorite recipes
    favorites: [],
    //add new favorite 
    addFavorite : (recipeId) => set(state =>({
      favorites : [...state.favorites,recipeId]
    })),
    //remove favorite
    removeFavorite : (recipeId) => set(state =>({
      favorites :state.favorites.filter(id => id !== recipeId)
    })),
    //recommendation
    recommendations : [],
    generateRecommendations: () => set(state => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
  }));
  
  export default useRecipeStore