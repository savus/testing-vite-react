import type { ReactNode } from "react";

export const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-body">{children}</div>
    </div>
  );
};
