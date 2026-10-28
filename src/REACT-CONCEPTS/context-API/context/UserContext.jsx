
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("Jagath");
  const [age, setAge] = useState(25);

  // Shared functions
  const updateUsername = (name) => {
    setUsername(name);
  };

  const increaseAge = () => {
    setAge((prev) => prev + 1);
  };

  const resetUser = () => {
    setUsername("Jagath");
    setAge(25);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        age,
        updateUsername,
        increaseAge,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access the context
export function useUser() {
  return useContext(UserContext);
}
