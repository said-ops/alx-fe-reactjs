import React,{useContext} from "react";
import { UserContext } from "../../context/UserContext";
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