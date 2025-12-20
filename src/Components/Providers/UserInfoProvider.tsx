import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { TUser, TUserContext } from "../../types";
import { Requests } from "../../utils/api";
import toast from "react-hot-toast";

const UserContext = createContext({} as TUserContext);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [activeUser, setActiveUser] = useState<Omit<TUser, "id"> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    return Requests.getAllUsers().then(setAllUsers);
  };

  useEffect(() => {
    setIsLoading(true);
    refetchData()
      .then(() => {
        toast.success("Users loaded");
      })
      .catch((e) => {
        toast.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const createUser = (body: Omit<TUser, "id">) => {
    setIsLoading(true);
    return Requests.postUser(body).then(refetchData);
  };

  const updateUser = (body: Partial<TUser>, id: string) => {
    setIsLoading(true);
    return Requests.editUser(body, id).then(refetchData);
  };

  const deleteUser = (id: string) => {
    setIsLoading(true);
    return Requests.deleteUser(id).then(refetchData);
  };

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        activeUser,
        setActiveUser,
        createUser,
        updateUser,
        deleteUser,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
