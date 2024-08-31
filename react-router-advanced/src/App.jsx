import React from 'react'
import {BrowserRouter as Router,Route ,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="profile">Profile</Link></li>
          
        </ul>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="profile/*" element={<Profile/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App