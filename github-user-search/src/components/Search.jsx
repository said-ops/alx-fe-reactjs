import React, { useEffect, useState } from 'react'
import fetchUserData from '../services/githubService'

function Search() {

  const [username,setUser]=useState('')
  const [data,setData]=useState(null)
  const [isLoading,setIsLoading]=useState(null)
  const [error,setError]=useState(false)

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
    setIsLoading(true)
    setData(null)
    setError(false)
    const fetchedData = await fetchUserData(searchTerm);
    if (fetchedData === 'Error while fetching') {
      setError(true);
    } else {
      setData(fetchedData);
    }
    setIsLoading(false);
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
          <div className='flex flex-col gap-8 md:p-8 md:min-w-[465px] w-[300px]  bg-[#33405f] shadow-sm rounded-md p-4' >
          {data &&!isLoading && !error&&(
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <img 
              src={data.avatar_url} 
              width="100px" 
              alt="" 
              className='rounded-full' />
              <div className='flex flex-col gap-4'>
                <p>Username:<span className='text-indigo-500'>{data.login}</span></p>
                <span>Public repos:<span  className='text-indigo-500'>{data.public_repos}</span></span>
                <a href={data.html_url} target='_blank' className='text-indigo-500'>View Profile</a>
              </div>
            </div>)}
            {error&&('Looks like we cant find the user')}
            {isLoading&&'Loading...'}
            
          </div>

      </div>
    </>
  )
}

export default Search