import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { Auth, Hub, API, graphqlOperation } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { getUser } from "../graphql/queries";
import { createUser } from "../graphql/mutations";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const sub = user?.attributes?.sub;
  const obj = useMemo(() => ({ user }), [user]);
  const navigate = useNavigate();

  useEffect(() => {
    const fecthUser = async () => {
      if (!sub) {
        return;
      }
      const fetchGetUser = await API.graphql(
        graphqlOperation(getUser, { id: sub })
      );

      if (fetchGetUser.data.getUser) {
        console.log("User alredy exists in database");
        return;
      }

      const newUser = {
        id: sub,
        email: user.attributes.email,
        name: user.attributes.name,
        phone: user.attributes.phone_number,
        role: "User",
      };

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };
    fecthUser();
  }, [sub, user]);

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
