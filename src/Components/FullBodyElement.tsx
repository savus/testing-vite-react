import type { ReactNode } from "react";

export const FullBodyElement = ({ children }: { children: ReactNode }) => {
  return <div className="full-body">{children}</div>;
};
