import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
    const [formData,setFormData]=useState({email:'',username:'',password:''})
    const {email,username,password}=formData
    const [errors,setErrors]=useState({errorName:false,errorEmail:false,errorPass:false})

    const handleChange = (e)=>{
        const {name,value}=e.target
        if(value){setFormData(prev=>({...prev,[name]:value}))}
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors({errorEmail:false,errorName:false,errorPass:false})
        if (!username) setErrors(prev=>({...prev,errorName:true}))
        if (!email) setErrors(prev=>({...prev,errorEmail:true}))
        if (!password) setErrors(prev=>({...prev,errorPass:true}))
        if(email  && username  && password)  
        {
            console.log(formData)
            setFormData({email:'',username:'',password:''})
        }else console.log('not submitted') 
        
    }
  return (
    <>
    <h1>Controlled components</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username" >User Name</label>
        <input type="text" id='username' name='username' onChange={handleChange} value={username} />
        {errors.errorName? <div className='error'>required</div> :''}
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' onChange={handleChange}  value={email}/>
        {errors.errorEmail ? <div className='error'>required</div> :''}
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' onChange={handleChange} value={password} />
        {errors.errorPass? <div className='error'>required</div> :''}
        <button type='submit'>submit</button>
    </form>
    
    </>
  )
}

export default RegistrationForm