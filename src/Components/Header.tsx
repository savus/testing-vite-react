import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";
import { useModalContext } from "./Providers/ModalContextProvider";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";
import "../css/navbar.css";

export const Header = () => {
  const { activeDropdown, setActiveDropdown, dropdownRef } =
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
              const menuToToggle =
                activeDropdown === "menus" ? "none" : "menus";
              setActiveDropdown(menuToToggle);
            }}
            dropdownRef={dropdownRef}
          >
            <DropdownMenu dropdownName="menus" />
          </NavItem>
          <NavItem text="Gallery" activeTabName="gallery" />
          <NavItem text="Animations" activeTabName="animations" />
        </ul>
      </nav>
    </header>
  );
};
