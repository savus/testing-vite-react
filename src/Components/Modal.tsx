import type React from "react";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="modal-overlay is-visible">
      <div className="modal-body">
        <div className="close-button">X</div>
        {children}
      </div>
    </div>
  );
};
