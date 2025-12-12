import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { TUser, TUserInformation } from "../../types";
import { Requests } from "../../api";

const UserContext = createContext({} as TUserInformation);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInformation, setUserInformation] = useState<Omit<
    TUser,
    "id"
  > | null>(null);
  const [allUsers, setAllUsers] = useState<TUser[]>([]);

  const createUser = (user: Omit<TUser, "id">) => {
    Requests.createUser(user).then(() => {
      Requests.getAllUsers().then((users) => {
        setAllUsers(users);
      });
    });
  };

  useEffect(() => {
    Requests.getAllUsers().then(setAllUsers);
  }, []);

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        userInformation,
        setUserInformation,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
