import React from 'react'
import { Navigate, Route, useLocation } from 'react-router-dom'

function ProtectedRoute({element,...rest}) {

        const location = useLocation()
    const useAuth = ()=>{
        return localStorage.getItem('loginToken') !==null
    }
  return useAuth() ? (element) :(<Navigate to='/login' state={{from:location}} />)
}

export default ProtectedRoute