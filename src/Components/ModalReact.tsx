import type { TVisibleModal } from "../types";

export const ModalReact = ({
  children,
  id,
  visibleModal,
  setVisibleModal,
}: {
  children: React.ReactNode;
  id: string;
  visibleModal: TVisibleModal;
  setVisibleModal: (modal: TVisibleModal) => void;
}) => {
  const handleVisibility = (modalState: TVisibleModal) =>
    modalState === visibleModal ? "is-visible" : "";
  return (
    <div className={`modal-overlay ${handleVisibility("form")}`} id={id}>
      <div className="modal-body">
        <div
          className="close-button"
          onClick={() => {
            setVisibleModal("none");
          }}
        >
          X
        </div>
        {children}
      </div>
    </div>
  );
};
