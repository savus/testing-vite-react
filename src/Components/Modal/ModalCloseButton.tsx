import { useModalContext } from "../Providers/ModalContextProvider";

export const ModalCloseButton = () => {
  const { setVisibleModal } = useModalContext();
  return (
    <button
      className="close-button btn"
      onClick={() => {
        setVisibleModal("none");
      }}
    >
      X
    </button>
  );
};
