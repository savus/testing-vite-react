import type { TVisibleModal } from "../types";

export const ModalReact = ({
  children,
  id,
  visibleModal,
  setVisibleModal,
  linkName,
}: {
  children: React.ReactNode;
  id: string;
  visibleModal: TVisibleModal;
  setVisibleModal: (modal: TVisibleModal) => void;
  linkName: string;
}) => {
  const handleVisibility = () =>
    linkName === visibleModal ? "is-visible" : "";

  return (
    <div className={`modal-overlay ${handleVisibility()}`} id={id}>
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
