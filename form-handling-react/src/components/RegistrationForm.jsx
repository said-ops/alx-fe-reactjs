import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
    const [formData,setFormData]=useState({email:'',username:'',password:''})
    const [error,setError]=useState({errorName:false,errorEmail:false,errorPass:false})

    const handleChange = (e)=>{
        const {name,value}=e.target
        if(value){setFormData(prev=>({...prev,[name]:value}))}
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setError({errorEmail:false,errorName:false,errorPass:false})
        if(!formData.email) setError(prev=>({...prev,errorEmail:true}))
        if(!formData.username) setError(prev=>({...prev,errorName:true}))
        if(!formData.password) setError(prev=>({...prev,errorPass:true}))
        if(formData.email  && formData.username  && formData.password)  
        {
            console.log(formData)
            setFormData({email:'',username:'',password:''})
        }else console.log('not submitted') 
        
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username" >User Name</label>
        <input type="text" id='username' name='username' onChange={handleChange} value={formData.username} />
        {error.errorName? <div className='error'>required</div> :''}
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' onChange={handleChange}  value={formData.email}/>
        {error.errorEmail ? <div className='error'>required</div> :''}
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' onChange={handleChange} value={formData.password} />
        {error.errorPass? <div className='error'>required</div> :''}
        <button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default RegistrationForm