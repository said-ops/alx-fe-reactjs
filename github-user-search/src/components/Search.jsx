import React, { useEffect, useState } from 'react'
import fetchUserData from '../services/githubService'

function Search() {

  const [username,setUser]=useState('')
  const [data,setData]=useState([])

  // useEffect( ()=>{
  //   // console.log('GitHub Token:', import.meta.env.VITE_GITHUB_API_KEY);
  //  const fetchData = async ()=>{
  //   const data= await fetchUserData('said-ops')
  //     console.log(data)
  //  }
  //  fetchData();
  // },[])

  //fetch data based on user input
  const fetchData = async (searchTerm)=>{
    const data= await fetchUserData(searchTerm)
      setData(data)
   }

  //handle submit and change
  const handlechange = (e)=>{
    setUser(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(username){
      fetchData(username)
      console.log(data)
    }
  }

  return (
    <>
      <div className='container h-screen w-full bg-[#141c2e] font-main font-semibold text-white'>
        <div>
          <div >
            <h2>DevFinder</h2>
            <div>
              <span>Light</span>
              <img src="./assets/icon-sun.svg" alt="light mode" />
            </div>
          </div>
          {/* form goes here */}
          <form 
            action="#"
            onSubmit={(e)=>handleSubmit(e)}
            >
            <div>
              <label htmlFor="username">
                <img src="./assets/search-icon.svg" alt="search" />
                  <input 
                  type="text"
                  name='username'
                  id='username'
                  value={username}
                  onChange={e=>handlechange(e)} 
                  />
              </label>
              <button type='submit'>Search</button>
            </div>

          </form>
          </div>
      </div>
    </>
  )
}

export default Search