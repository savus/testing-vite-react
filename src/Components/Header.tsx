import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";

export const Header = () => {
  return (
    <header className="main-header">
      <Navbar>
        <NavItem text="Form" />
        <NavItem text="Menus">
          <div className="dropdown">dropdown</div>
        </NavItem>
        <NavItem text="List Item" />
        <NavItem text="List Item" />
      </Navbar>
      <Modal></Modal>
    </header>
  );
};
