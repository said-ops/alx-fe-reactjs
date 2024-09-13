import React, { useEffect, useState } from 'react'
import data from'../data.json'
import { Link } from 'react-router-dom'

function HomePage() {


    const [recipes,setRecipes]=useState([])
    const [visibleCount,setCount]=useState(12)
    useEffect(()=>{
        setRecipes(data)
        console.log(data)
    },[])
    
  return (
    <>
    <h1 className='text-4xl text-blue-800 font-bold'>Home Page</h1>

    <nav>
        <Link to='add-recipe-form'>
          <button className='bg-slate-600 text-blue-500 rounded-2xl w-[6rem] h-[4rem] p-1 ml-3 mt-4 hover:shadow-md hover:bg-slate-300'>Add New Recipe</button>
        </Link>
      </nav>
    <section className='grid  place-items-center grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4 xl:grid-cols-6  p-4 md:gap-2 mt-4'>
        {/* cards goes here */}
        {
            recipes.slice(0,visibleCount).map(recipe=>{
                return(
                    <Link to={`/recipe-details/${recipe.id}`} key={recipe.id}>
                        <div  className='flex flex-col bg-[#FFFFFF] max-w-[150px] rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'>
                    <img 
                        className='w-[150px] h-[150px]'
                        src={recipe.image} alt={recipe.title} />
                    <div className='p-4'>
                        <h2 className='text-blue-600 font-bold uppercase tracking-wide'>{recipe.title}</h2>
                        <p className='text-blue-400 font-semibold' >{recipe.summary}</p>
                    </div>
                </div>
                    </Link>
                )
            })
        }
        
         </section>
         <button className='bg-black text-yellow-500 rounded-2xl w-[100px] h-[50px] ' onClick={()=>setCount(visibleCount+6)}>Load more</button>
    
    </>
  )
}

export default HomePage