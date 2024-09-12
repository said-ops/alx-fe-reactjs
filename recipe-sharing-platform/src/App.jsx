import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RecipeDetail from './components/RecipeDetail'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recipe-details/:id' element={<RecipeDetail/>}/>
        </Routes>
      </Router>
    </>
  )
} 

export default App