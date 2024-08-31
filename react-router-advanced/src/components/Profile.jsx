import React from 'react'
import {Routes,Route,Link, useMatch} from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'


function Profile() {
  let match =useMatch('/profile/*')
  let path = match ? match.pathnameBase : ""
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`${path}/settings`}>Profile Settings</Link>
            <Link to={`${path}/details`}>Profile Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='settings' element={<ProfileSettings/>}/>
        <Route path='details' element={<ProfileDetails/>}/>
      </Routes>
    </>
  )
}

export default Profile