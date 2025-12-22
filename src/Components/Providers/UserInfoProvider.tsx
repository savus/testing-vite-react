import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { TOmitID, TPartialUser, TUser } from "../../types";
import { Requests } from "../../utils/api";
import toast from "react-hot-toast";
type TUserContext = {
  allUsers: TUser[];
  setAllUsers: (users: TUser[]) => void;
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  updateUser: (user: TPartialUser, id: string) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  createUser: (body: TOmitID) => Promise<void>;
};

const UserContext = createContext({} as TUserContext);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () =>
    Requests.getAllUsers().then((data) => {
      return setAllUsers(data);
    });

  useEffect(() => {
    setIsLoading(true);
    refetchData()
      .then(() => {
        toast.success("Users loaded!");
        return;
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const updateUser = async (body: TPartialUser, id: string) => {
    setIsLoading(true);
    return Requests.editUser(body, id).then(refetchData);
  };

  const deleteUser = async (id: string) => {
    setIsLoading(true);
    return Requests.deleteUser(id).then(refetchData);
  };

  const createUser = (body: TOmitID) =>
    Requests.postUser(body).then(refetchData);

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        isLoading,
        setIsLoading,
        updateUser,
        deleteUser,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
