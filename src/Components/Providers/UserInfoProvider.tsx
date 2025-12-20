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
    setIsLoading(true);
    Requests.getAllUsers()
      .then(setAllUsers)
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetchData();
  }, []);

  const createUser = (body: Omit<TUser, "id">) => {
    setIsLoading(true);
    Requests.postUser(body)
      .then(refetchData)
      .then(() => {
        toast.success("User posted!");
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(true);
      });
  };

  const updateUser = (body: Partial<TUser>, id: string) => {
    setIsLoading(true);
    return Requests.editUser(body, id)
      .then(refetchData)
      .then(() => {
        toast.success(`User ${id} updated!`);
      })
      .catch(() => {
        toast.error("Something went wrong!)");
      })
      .finally(() => {
        setIsLoading(false);
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
