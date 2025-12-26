import { createContext, useEffect, useState, type ReactNode } from "react";
import type { TUser } from "../../types";

type TUserAuthContext = {
  user: TUser | null;
  setUser: (user: TUser) => void;
};

const UserAuthContext = createContext({} as TUserAuthContext);

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {}, []);
  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
