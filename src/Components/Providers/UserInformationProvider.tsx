import { createContext, useContext, useState, type ReactNode } from "react";
import type { TUserContext, TUserInfo } from "../../types";

const UserInfoContext = createContext<TUserContext>({} as TUserContext);

export const UserInformationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userInformation, setUserInformation] = useState<TUserInfo | null>(
    null
  );
  return (
    <UserInfoContext.Provider
      value={{
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserContext = () => useContext(UserInfoContext);
