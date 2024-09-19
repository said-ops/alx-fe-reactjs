import React, { useEffect } from 'react'
import fetchUserData from '../services/githubService'

function Search() {

  useEffect( ()=>{
    // console.log('GitHub Token:', import.meta.env.VITE_GITHUB_API_KEY);

   const fetchData = async ()=>{
    const data= await fetchUserData('said-ops')
   console.log(data)
   }
   fetchData();
  },[])
  return (
    <h2>this is search component</h2>
  )
}

export default Search