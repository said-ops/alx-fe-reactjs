import React from 'react'
import AddRecipeForm from './AddRecipeForm'
import RecipeList from './RecipeList'
import SearchBar from './SearchBar.jsx'

function RecpeView() {
  return (
    <>
    <SearchBar />
    <AddRecipeForm/>
    <RecipeList/>
    </>
  )
}

export default RecpeView