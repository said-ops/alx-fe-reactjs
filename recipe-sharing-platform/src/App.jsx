import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <>

      
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recipe-details/:id' element={<RecipeDetail/>}/>
          <Route path='/add-recipe-form' element={<AddRecipeForm/>} />
        </Routes>
      </Router>
    </>
  )
} 

export default App