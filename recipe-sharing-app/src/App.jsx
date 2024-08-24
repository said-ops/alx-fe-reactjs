import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';

function App() {
  return (
    <> 
    <Router>
            <AddRecipeForm />
            <RecipeList />
     
          <Routes>
              <Route path='/Recipe-Details/:recipeId' element={<RecipeDetails />} />
             
            </Routes>
          </Router>
    </>
  )
}

export default App