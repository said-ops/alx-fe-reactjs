import React, { useEffect, useState } from 'react'
import fetchUserData from '../services/githubService'

function Search() {

  const [username,setUser]=useState('')
  const [data,setData]=useState(null)
  const [isLoading,setIsLoading]=useState(null)
  const [error,setError]=useState(false)
  const [visibleCount,setCount]=useState(5)
  const [theme,settheme]=useState('dark')

  // useEffect( ()=>{
  //   // console.log('GitHub Token:', import.meta.env.VITE_GITHUB_API_KEY);
  //  const fetchData = async ()=>{
  //   const data= await fetchUserData('said-ops','location')
  //     // console.log(data.items)
  //  }
  //  fetchData();
  // },[])

  //fetch data based on user input
  const fetchData = async (searchTerm,cas='location')=>{
    setIsLoading(true)
    setData(null)
    setError(false)
    const fetchedData = await fetchUserData(searchTerm,cas);
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
      fetchData(username,'location')
      // console.log(data)
    }
  }

  return (
    <>
      <div className={`min-h-screen w-[100%] ${theme==='dark'?'bg-[#141c2e]':'bg-white'} font-main p-4 font-semibold text-white flex flex-col justify-center items-center gap-8`}>
        {/* search here */}
        <div className={`flex flex-col gap-8 md:p-8 bg-[#33405f] shadow-sm rounded-md p-4`}>
          <div  className='flex justify-between items-center'>
            <h2>DevFinder</h2>
            <div className='flex justify-between items-center gap-4'>
              <span>{theme==='dark'?'Light':'Dark'}</span>
              <img 
              className='cursor-pointer'
              onClick={()=>{if(theme==='dark')settheme('light')
                else  settheme('dark')
              }}
              src={`${theme==='dark'?'./assets/icon-sun.svg':'./assets/icon-moon.svg'}`} alt="light mode" />
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
              <button type='submit' className='p-4 rounded-md bg-indigo-500 md:max-w-fit w-full'>Search</button>
            </div>
          </form>
          </div>
          {/* display results here */}
          
          {
            data&&!isLoading&&!error&&Array.isArray(data.items)?data.items.slice(0,visibleCount).map((user,index)=>{
              return(
                <div key={index} className='flex flex-col gap-8 md:p-8 md:min-w-[465px] w-[300px]  bg-[#33405f] shadow-sm rounded-md p-4' >
                  <div className='flex flex-col md:flex-row justify-between items-center'>
                    <img 
                    src={user.avatar_url} 
                    width="100px" 
                    alt="" 
                    className='rounded-full' />
                    <div className='flex flex-col gap-4'>
                      <p>Username:<span className='text-indigo-500'>{user.login}</span></p>
                      <span>Score:<span  className='text-indigo-500'>{user.score}</span></span>
                      <a href={user.html_url} target='_blank' className='text-indigo-500'>View Profile</a>
                    </div>
                  </div>
                </div>
              )
            }):''
          }
          <div className='flex flex-col gap-8 md:p-8 md:min-w-[465px] w-[300px]  bg-[#33405f] shadow-sm rounded-md p-4'>
            {error&&('Looks like we cant find the user')}
            {isLoading&&'Loading...'}
            {!data&&!isLoading&&!error&&('Look For Devs')}
          </div>
          <button
          className='p-4 rounded-md bg-indigo-500'
          onClick={()=>setCount(visibleCount+5)}>Load More</button>
      </div>
    </>
  )
}

export default Search