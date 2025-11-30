import type { ReactNode } from "react";

export const DropdownMenu = ({ children }: { children: ReactNode }) => {
  return <div className="dropdown">{children}</div>;
};
