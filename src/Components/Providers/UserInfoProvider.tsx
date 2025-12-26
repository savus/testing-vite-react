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
  updateUser: (user: TPartialUser, id: string) => Promise<unknown>;
  updateUserOpt: (user: TPartialUser, id: string) => Promise<unknown>;
  deleteUser: (id: string) => Promise<unknown>;
  deleteUserOpt: (id: string) => Promise<unknown>;
  createUser: (body: TOmitID) => Promise<unknown>;
};

const UserContext = createContext({} as TUserContext);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [allUsers, setAllUsers] = useState<TUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => Requests.getAllUsers().then(setAllUsers);

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
    return Requests.updateUser(body, id)
      .then(refetchData)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateUserOpt = (body: TPartialUser, id: string) => {
    const newState = allUsers.map((user) =>
      user.id === id ? { ...user, ...body } : user
    );

    setAllUsers(newState);

    return Requests.updateUser(body, id)
      .then(refetchData)
      .then(() => {
        toast.success("success");
      })
      .catch((e) => {
        toast.error(e.message);
        setAllUsers(allUsers);
      });
  };

  const deleteUser = (id: string) => {
    setIsLoading(true);
    return Requests.deleteUser(id)
      .then(refetchData)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteUserOpt = (id: string) => {
    const updatedData = allUsers.filter((user) => user.id !== id);

    setAllUsers(updatedData);
    return Requests.deleteUser(id)
      .then(refetchData)
      .then(() => {
        toast.success("Sucessfully deleted user");
      })
      .catch((e) => {
        toast.error(e.message);
        setAllUsers(allUsers);
      });
  };

  const createUser = (body: TOmitID) => {
    setIsLoading(true);
    return Requests.postUser(body)
      .then(refetchData)
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <UserContext.Provider
      value={{
        allUsers,
        setAllUsers,
        isLoading,
        setIsLoading,
        updateUser,
        updateUserOpt,
        deleteUser,
        deleteUserOpt,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
