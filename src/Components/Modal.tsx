import type { ReactNode } from "react";
import "../css/modal.css";
export const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal-overlay is-visible">
      <div className="modal-body">
        <div className="modal-header">Form</div>
        {children}
      </div>
    </div>
  );
};
