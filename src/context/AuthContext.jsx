import React, {createContext, useContext, useState, useMemo} from 'react'


const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const obj = useMemo(() => ({user}), [user]);

  return (
    <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);