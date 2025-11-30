import "../css/modal-form.css";
import {
  NavbarStateProvider,
  useNavbarStateContext,
} from "./Providers/NavbarStateProvider";

export const ModalReact = ({
  children,
  id,
  linkName,
}: {
  children: React.ReactNode;
  id: string;
  linkName: string;
}) => {
  const { visibleModal, setVisibleModal } = useNavbarStateContext();

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
