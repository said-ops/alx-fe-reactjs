import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
    <ul style={
        {
            display:'flex',
            gap:'15px',
            color:'black',
            listStyle:'none'
        }
    }>
        <li><Link style={{textDecoration:'none'}} to='/'>Home</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/About'>About</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/Services'>Services</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/Contact'>Contact</Link></li>
    </ul>
   </>
  )
}

export default Navbar