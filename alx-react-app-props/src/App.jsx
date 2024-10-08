import React  from "react";
import ProfilePage from "./components/UserProfile";
import UserContext from "./components/userContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <UserContext.Provider value={userData}>
            <ProfilePage  />
        </UserContext.Provider>;
}

export default App;