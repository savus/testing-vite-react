import type React from "react";

export const Modal = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <div className="modal-overlay" id={id}>
      <div className="modal-body">
        <div className="close-button">X</div>
        {children}
      </div>
    </div>
  );
};
