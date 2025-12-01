import type { ReactNode } from "react";
import "../css/modal.css";
import type { TVisibleModal } from "../types";
import { useModalContext } from "./Providers/ModalContextProvider";
export const Modal = ({
  children,
  modalStateName,
}: {
  children: ReactNode;
  modalStateName: TVisibleModal;
}) => {
  const { visibleModal, setVisibleModal } = useModalContext();

  const isModalVisible = (stateName: TVisibleModal) =>
    stateName === visibleModal ? "is-visible" : "";
  return (
    <div className={`modal-overlay ${isModalVisible(modalStateName)}`}>
      <div className="modal-body">
        <button
          className="close-button"
          onClick={() => {
            setVisibleModal("none");
          }}
        >
          X
        </button>
        <div className="modal-header">Form</div>
        {children}
      </div>
    </div>
  );
};
