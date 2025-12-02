import type { ReactNode } from "react";
import "../css/modal.css";
import type { TVisibleModal } from "../types";
import { useModalContext } from "./Providers/ModalContextProvider";
import { ModalCloseButton } from "./ModalCloseButton";
export const Modal = ({
  header,
  children,
  modalStateName,
}: {
  header: string;
  children: ReactNode;
  modalStateName: TVisibleModal;
}) => {
  const { visibleModal } = useModalContext();

  const isModalVisible = (stateName: TVisibleModal) =>
    stateName === visibleModal ? "is-visible" : "";
  return (
    <div
      className={`modal-overlay is-visible ${isModalVisible(modalStateName)}`}
    >
      <div className="modal-body">
        <ModalCloseButton />
        <div className="modal-header">{header}</div>
        {children}
      </div>
    </div>
  );
};
