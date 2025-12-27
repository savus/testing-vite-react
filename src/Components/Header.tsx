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
            <DropdownMenu dropdownName="menus">
              <li>Link 1</li>
              <NavItem activeLinkName="menus" text="link-2" />
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </DropdownMenu>
          </NavItem>
          <NavItem text="Gallery" activeLinkName="gallery" />
          <NavItem text="Animations" activeLinkName="animations" />
        </ul>
      </nav>
    </header>
  );
};
