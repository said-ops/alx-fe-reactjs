import React from 'react'
import {BrowserRouter as Router,Route ,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import BlogPost from './components/BlogPost'

function App() {
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="blog/1">blog post 1</Link></li>
          <li><Link to="blog/2">blog post 2</Link></li>
          <li><Link to="blog/3">blog post 3</Link></li>
          
        </ul>
      </nav>
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="profile/*" element={<Profile/>}></Route>
          <Route path="blog/:id" element={<BlogPost/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App