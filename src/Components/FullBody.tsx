import type { ReactNode } from "react";

export const FullBody = ({ children }: { children: ReactNode }) => {
  return <div className="full-body">{children}</div>;
};
