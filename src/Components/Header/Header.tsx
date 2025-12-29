import "../../css/navbar.css";
import { useActiveContext } from "../Providers/ActiveStateProvider";
import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";

const dropdownMenuNames = ["users", "things", "other stuff"];
export const Header = () => {
  const { setActiveNavDropdown, topDropdownRef } = useActiveContext();
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
              setActiveNavDropdown("menus");
            }}
          >
            <DropdownMenu
              dropdownName="menus"
              activeLinkNames={dropdownMenuNames}
            />
          </NavItem>
          <NavItem text="Gallery" activeLinkName="gallery" />
          <NavItem text="Animations" activeLinkName="animations" />
        </ul>
      </nav>
    </header>
  );
};
