import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

function PostsComponent () {

    const fetcher = ()=>fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
   const {data,isError,error,isLoading} = useQuery({
    queryKey:['fetchPosts'],
    queryFn:fetcher,
    queryFn: fetcher,
    cacheTime: 5 * 60 * 1000,            
    staleTime: 60 * 1000,                
    refetchOnWindowFocus: false,         
    keepPreviousData: true,
   })
   const [visibleCount,setCount]=useState(10)
  return (
    <>
    <h1>React Query</h1>
    {isLoading && <div>Loading...</div>}
    {isError && <div>{error.message}</div>}
    {data && data.slice(0,visibleCount).map(item=>(
      <div key={item.id}>
      <div >user id : {item.userId}</div>
      <div >post title :{item.title}</div>
      <div >post body :{item.body}</div>
      </div>
    )) }
    <button onClick={()=>setCount(visibleCount + 5)}>load More</button>
    </>
  )
}

export default PostsComponent 