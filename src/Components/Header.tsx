import { DropdownMenu } from "./DropdownMenu";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { DropdownStateProvider } from "./Providers/DropdownStateProvider";

export const Header = () => {
  return (
    <header className="main-header">
      <Navbar>
        <DropdownStateProvider>
          <NavItem text="Form" />
          <NavItem text="Menus">
            <DropdownMenu />
          </NavItem>
          <NavItem text="List Item" />
          <NavItem text="List Item" />
        </DropdownStateProvider>
      </Navbar>
      <Modal></Modal>
    </header>
  );
};
