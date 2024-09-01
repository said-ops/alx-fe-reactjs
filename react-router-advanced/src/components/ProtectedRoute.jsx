import React from 'react'
import { Navigate, Route, useLocation } from 'react-router-dom'

function ProtectedRoute({element,...rest}) {

        const location = useLocation()
    const usAuth = ()=>{
        return localStorage.getItem('loginToken') !==null
    }
  return usAuth() ? (element) :(<Navigate to='/login' state={{from:location}} />)
}

export default ProtectedRoute