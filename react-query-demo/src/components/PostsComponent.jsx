import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'

function PostsComponent () {

    const fetcher = ()=>fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
   const {data,error,isLoading} = useQuery({
    queryKey:['fetchPosts'],
    queryFn:fetcher
   })
   const [visibleCount,setCount]=useState(10)
  return (
    <>
    <h1>React Query</h1>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error while fetching posts</div>}
    {data && data.slice(0,visibleCount).map(item=>(
      <div key={item.key}>
      <div key={item.id}>user id : {item.userId}</div>
      <div key={item.id}>post title :{item.title}</div>
      <div key={item.id}>post body :{item.body}</div>
      </div>
    )) }
    <button onClick={()=>setCount(visibleCount + 5)}>load More</button>
    </>
  )
}

export default PostsComponent 