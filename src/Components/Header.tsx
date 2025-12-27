import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";
import "../css/navbar.css";
import { useActiveContext } from "./Providers/ActiveStateProvider";
import { DropdownItem } from "./DropdownItem";

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
              <DropdownItem
                text="Dropdown Item 1"
                onClick={() => {
                  console.log("clicked first");
                }}
              />
              <DropdownItem
                text="Dropdown Item 2"
                onClick={() => {
                  console.log("clicked second");
                }}
              />
              <DropdownItem text="Dropdown Item 3" />
              <DropdownItem text="Dropdown Item 4" />
              <DropdownItem text="Dropdown Item 5" />
            </DropdownMenu>
          </NavItem>
          <NavItem text="Gallery" activeLinkName="gallery" />
          <NavItem text="Animations" activeLinkName="animations" />
        </ul>
      </nav>
    </header>
  );
};
