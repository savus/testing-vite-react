import { useModalContext } from "./Providers/ModalContextProvider";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const ModalCloseButton = () => {
  const { setVisibleModal } = useModalContext();
  const { setActiveLink } = useNavbarStateContext();
  return (
    <button
      className="close-button btn"
      onClick={() => {
        setVisibleModal("none");
        setActiveLink("none");
      }}
    >
      X
    </button>
  );
};
