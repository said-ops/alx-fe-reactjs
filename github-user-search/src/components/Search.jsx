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
      <div className='h-screen w-[100%] bg-[#141c2e] font-main p-4 font-semibold text-white flex flex-col justify-center items-center gap-8'>
        {/* search here */}
        <div className='flex flex-col gap-8 md:p-8 bg-[#33405f] shadow-sm rounded-md p-4 '>
          <div  className='flex justify-between items-center'>
            <h2>DevFinder</h2>
            <div className='flex justify-between items-center gap-4'>
              <span>Light</span>
              <img src="./assets/icon-sun.svg" alt="light mode" />
            </div>
          </div>
          {/* form goes here */}
          <form 
            action="#"
            onSubmit={(e)=>handleSubmit(e)}
            >
            <div className='flex flex-col md:flex-row  items-center md:gap-16 gap-4'>
              <label htmlFor="username" className='flex items-center w-[16rem] h-[3rem] '>
                <img src="./assets/search-icon.svg" alt="search" />
                  <input 
                  className=' border-none outline-none flex-1 bg-[#33405f] pl-4 h-full'
                  type="text"
                  placeholder='Search Github Username...'
                  name='username'
                  id='username'
                  value={username}
                  onChange={e=>handlechange(e)} 
                  />
              </label>
              <button type='submit' className='p-4 rounded-sm bg-[#0079fe] md:max-w-fit w-full'>Search</button>
            </div>
          </form>
          </div>
          {/* display results here */}
          <div className='flex flex-col gap-8 md:p-8 bg-[#33405f] shadow-sm rounded-md p-4' >

          </div>

      </div>
    </>
  )
}

export default Search