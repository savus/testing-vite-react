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
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () =>
    Requests.getAllUsers()
      .then(setAllUsers)
      .finally(() => {
        setIsLoading(false);
      });

  useEffect(() => {
    setIsLoading(true);
    refetchData();
  }, []);

  const createUser = (body: Omit<TUser, "id">) =>
    Requests.postUser(body).then(refetchData);

  const updateUser = (body: Partial<TUser>, id: string) =>
    Requests.editUser(body, id).then(refetchData);

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        activeUser,
        setActiveUser,
        createUser,
        // updateUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
