import { useRef, type ReactNode } from "react";
import "../css/modal.css";
import type { TVisibleModal } from "../../types";
import { useModalContext } from "../Providers/ModalContextProvider";
import { ModalCloseButton } from "../ModalCloseButton";
export const Modal = ({
  header,
  children,
  modalStateName,
}: {
  header: string;
  children: ReactNode;
  modalStateName: TVisibleModal;
}) => {
  const { visibleModal, setVisibleModal } = useModalContext();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isModalVisible = (stateName: TVisibleModal) =>
    stateName === visibleModal ? "is-visible" : "";

  const closeOnClick = (target: HTMLDivElement) => {
    if (overlayRef.current) {
      if (!overlayRef.current.contains(target)) setVisibleModal("none");
    }
  };
  return (
    <div
      className={`modal-overlay ${isModalVisible(modalStateName)}`}
      onClick={(e) => {
        const target = e.target as HTMLDivElement;
        closeOnClick(target);
      }}
    >
      <div className="modal-body" ref={overlayRef}>
        <ModalCloseButton />
        <div className="modal-header">{header}</div>
        {children}
      </div>
    </div>
  );
};
