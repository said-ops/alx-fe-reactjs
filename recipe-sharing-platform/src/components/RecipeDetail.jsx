import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from'../data.json'

function RecipeDetail() {
    const {id} =useParams()
    const [recipe,setRecipe]=useState({})
    useEffect(()=>{
        const matchedRecipe =data.find(item=>item.id==id)
        if(matchedRecipe)setRecipe(matchedRecipe)
           
    },[])
  return (
    <>
        <h1 className='text-4xl text-blue-800 font-bold'>Recipe: {recipe.title}</h1>
        <div className='flex flex-col gap-4 p-4'>
            <img 
            className='w-[150px] h-[150px]'
            src={recipe.image} alt={recipe.title} />
            <h2 className='text-xl text-blue-400 font-bold'>Preparation Steps</h2>
            <div>
                {/* steps goes here */}
                {recipe.steps? (
                    recipe.steps.map((step,index)=>
                    <p 
                    className='text-slate-600'
                    key={index}>{step}</p>)
                ):
                <p>no step </p>}
            </div>
            <h2 className='text-xl text-blue-400 font-bold'>Ingredients</h2>
            <div>
                {/* Ingredients goes here */}
                
            <div>
                {/* steps goes here */}
                {recipe.ingredients
                ? (
                    recipe.ingredients.map((step,index)=>
                    <p 
                    className='text-slate-600'
                    key={index}>{step}</p>)
                ):
                <p>no ingredients </p>}
            </div>
            </div>
        </div>
    </>
  )
}

export default RecipeDetail