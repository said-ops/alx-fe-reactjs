import React,{useContext} from "react";
import { UserContext } from "./userContext";
function UserDetails({ userData }) {
    const {name,email} = useContext(UserContext)
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </div>
    );
  }
  
  export default UserDetails;