import { DropdownMenu } from "./DropdownMenu";
import { NavItem } from "./NavItem";
import "../css/navbar.css";

export const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar">
        <ul className="navbar-nav ul-defaults-none container">
          <NavItem text="Form" activeLinkName="form" />
          <NavItem text="Menus" activeLinkName="menus">
            <DropdownMenu dropdownName="menus" />
          </NavItem>
          <NavItem text="Gallery" activeLinkName="gallery" />
          <NavItem text="Animations" activeLinkName="animations" />
        </ul>
      </nav>
    </header>
  );
};
