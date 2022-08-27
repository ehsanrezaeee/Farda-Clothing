import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utility/firebase/firebase";


export const UserContex = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
  

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe
  }, [])

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

  return <UserContex.Provider value={value}>{children}</UserContex.Provider>
}