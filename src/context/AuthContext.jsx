import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { Auth, Hub } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const obj = useMemo(() => ({ user }), [user]);
  const navigate = useNavigate();

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
  }, []);

  useEffect(() => {
    Hub.listen("auth", ({ payload }) => {
      const { event } = payload;
      if (event === "signIn") {
        const user = payload.data;
        setUser(user);
        navigate("/");
        // assign user
      } else if (event === "autoSignIn_failure") {
        // redirect to sign in page
      } else if (event === "signOut") {
        setUser(null);
        navigate("/login");
      }
    });
  }, [navigate]);

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
