import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";
import "../css/navbar.css";
import { useActiveContext } from "./Providers/ActiveStateProvider";

export const Header = () => {
  const { activeNavDropdown, setActiveNavDropdown, topDropdownRef } =
    useActiveContext();
  return (
    <header className="main-header">
      <nav className="navbar">
        <ul className="navbar-nav ul-defaults-none container">
          <NavItem text="Form" activeLinkName="form" />
          <NavItem
            text="Menus"
            activeLinkName="menus"
            dropdownRef={topDropdownRef}
            onClick={() => {
              const toggleState =
                activeNavDropdown === "menus" ? "none" : "menus";
              setActiveNavDropdown(toggleState);
            }}
          >
            <DropdownMenu dropdownName="menus"></DropdownMenu>
          </NavItem>
          <NavItem text="Gallery" activeLinkName="gallery" />
          <NavItem text="Animations" activeLinkName="animations" />
        </ul>
      </nav>
    </header>
  );
};
