import { createContext, useState, useLayoutEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, getUser } from "../services";

export const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onstagechange");
      if (user) {
        setUser(user);
        getUser().then((users) => {
          const isFirstUser = !users.some(
            (userItem) => userItem.uid === user.uid
          );
          if (isFirstUser) {
            addUser({
              uid: user.uid,
              photoURL: user.photoURL,
              displayName: user.displayName,
            });
          }
        });

        navigate("/", { replace: true });
      } else {
        setUser(null);
        navigate("/auth", { replace: true });
      }
    });
  }, [auth]);

  return (
    <userContext.Provider value={{ user }}>{children}</userContext.Provider>
  );
};

export const useUserContext = () => {
  const { user } = useContext(userContext);
  return user;
};
