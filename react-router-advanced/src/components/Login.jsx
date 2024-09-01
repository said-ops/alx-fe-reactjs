import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const handleClick = (e)=>{
        localStorage.setItem('loginToken','grant access')
        alert('your logged in successfuly!')
        navigate('/profile')
    }
  return (
    <>
        <h2>Login page</h2>
        <button onClick={handleClick}>Click to login </button>
    </>

  )
}

export default Login