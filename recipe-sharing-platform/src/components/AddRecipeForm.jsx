import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddRecipeForm() {

    const [newRecipe,setNewRecipe] =useState({
        title:'',
        ingredients:'',
        instructions:''
    })
    const handleChange = (e)=>{
        const {name}=e.target
        setNewRecipe({...newRecipe,[name]:e.target.value})

    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(validation()){
            console.log(newRecipe)
            alert('new recipe added')
            setNewRecipe({
                title:'',ingredients:'',instructions:''
            })
         if(!validation())
            {
                alert('invalid form ')
            }   
        }
    }
    const [error,setError]=useState({})
    const [fieldError,setHasError]=useState(false)

    const validation = ()=>{

        const errMsg ={title:'',instructions:'',ingredients:''}
        let hasError=false

     if(!newRecipe.title){  
         errMsg.title='title is required'
        hasError=true
        }
     else if(newRecipe.title.length<10){
        errMsg.title='title is short'
        hasError=true
    }
    if(!newRecipe.instructions){
        errMsg.instructions='Steps are required'
        hasError=true
    }
    if(!newRecipe.ingredients){
        errMsg.ingredients='ingredients are required'
        hasError=true
    }
    else if (newRecipe.ingredients.split('\n').filter(ing => ing.trim() !== "").length < 2) {
        errMsg.ingredients = 'Enter at least two ingredients';
        hasError=true
      }
    setError(errMsg)
    setHasError(hasError)
    return !hasError
    }
    
  return (
    <>
        <h1 className='text-4xl text-blue-800 font-bold text-center'>Add your recipe</h1>
        <nav>
        <Link to='/'>
          <button className='bg-slate-600 text-blue-500 rounded-2xl w-[6rem] h-[4rem] p-1 ml-3 mt-4 hover:shadow-md hover:bg-slate-300'>Home</button>
        </Link>
      </nav>
        <form 
        className=' container flex flex-col gap-4 max-w-xs mx-auto mt-4'
        action="#"
         onSubmit={e=>handleSubmit(e)}
         >
            <label htmlFor="title">Recipe Title</label>
            <input 
            type="text"
            name='title'
            id='title'
            value={newRecipe.title}
            onChange={e=>handleChange(e)}
             />
             {error.title?<span className='text-red-700 '>{error.title}</span>:''}

            <label htmlFor="ingredients">Recipe Ingredients</label>
            <textarea 
            name='ingredients'
            id='ingredients'
            value={newRecipe.ingredients}
            onChange={e=>handleChange(e)}
             />
             {error.ingredients?<span className='text-red-700 '>{error.ingredients}</span>:''}

            <label htmlFor="instructions">Recipe steps</label>
            <textarea 
            name='instructions'
            id='instructions'
            value={newRecipe.instructions}
            onChange={e=>handleChange(e)}
             />
             {error.instructions?<span className='text-red-700 '>{error.instructions}</span>:''}

             <button 
             className='rounded-md bg-cyan-500 p-4 font-bold text-blue-900 hover:bg-cyan-400 hover:text-blue-600'
             type='submit'>Add Recipe</button>
        </form>
    </>
  )
}

export default AddRecipeForm