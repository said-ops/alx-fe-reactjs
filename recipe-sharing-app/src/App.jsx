import React from 'react'
import FavoritesList from './components/FavoritesList .jsx'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';
import RecpeView from './components/RecpeView.jsx';
import RecommendationsList from './components/RecommendationsList.jsx';

function App() {
  return (
    <> 
    <Router>
          <Routes>
            <Route path='/' element={<RecpeView/>}/>
              <Route path='/Recipe-Details/:recipeId' element={<RecipeDetails />} />
              <Route path='/Favorites' element={<FavoritesList />} />
              <Route path='/recommendations' element={<RecommendationsList/>} />
            </Routes>
          </Router>
    </>
  )
}

export default App