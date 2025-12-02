import { createContext, useContext, useState, type ReactNode } from "react";
import type { TUserInfo, TUserInformation } from "../../types";

const UserContext = createContext({} as TUserInformation);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInformation, setUserInformation] = useState<TUserInfo | null>(
    null
  );
  return (
    <UserContext.Provider
      value={{
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
