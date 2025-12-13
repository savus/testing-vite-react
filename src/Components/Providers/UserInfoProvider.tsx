import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { TUser, TUserContext } from "../../types";
import { Requests } from "../../utils/api";

const UserContext = createContext({} as TUserContext);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [activeUser, setActiveUser] = useState<Omit<TUser, "id"> | null>(null);

  useEffect(() => {
    Requests.getAllUsers().then(setAllUsers);
  }, []);

  const createUser = (body: Omit<TUser, "id">) => {
    return Requests.postUser(body).then(() => {
      Requests.getAllUsers().then(setAllUsers);
    });
  };

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        activeUser,
        setActiveUser,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
