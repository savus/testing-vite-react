import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";
import { useModalContext } from "./Providers/ModalContextProvider";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";
import "../css/navbar.css";

export const Header = () => {
  const { dropdownMenu, setDropdownMenu, dropdownRef } =
    useNavbarStateContext();
  const { setVisibleModal } = useModalContext();

  return (
    <header className="main-header">
      <nav className="navbar">
        <ul className="navbar-nav ul-defaults-none">
          <NavItem
            text="Form"
            activeTabName="form"
            onClick={() => {
              setVisibleModal("form");
            }}
          />
          <NavItem
            text="Menus"
            activeTabName="menus"
            onClick={() => {
              const toggle = dropdownMenu === "menus" ? "none" : "menus";
              setDropdownMenu(toggle);
            }}
            dropdownRef={dropdownRef}
          >
            <DropdownMenu dropdownStateName="menus" />
          </NavItem>
          <NavItem text="Gallery" activeTabName="gallery" />
          <NavItem text="Animations" activeTabName="animations" />
        </ul>
      </nav>
    </header>
  );
};
