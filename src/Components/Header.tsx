import { DropdownMenu } from "./DropdownMenu";
import { Modal } from "./Modal";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import {
  DropdownStateProvider,
  useDropdownContext,
} from "./Providers/DropdownStateProvider";

export const Header = () => {
  const { dropdownRef } = useDropdownContext();
  return (
    <header className="main-header">
      <Navbar>
        <DropdownStateProvider>
          <NavItem text="Form" />
          <NavItem text="Menus">
            <DropdownMenu dropdownRef={dropdownRef} />
          </NavItem>
          <NavItem text="List Item" />
          <NavItem text="List Item" />
        </DropdownStateProvider>
      </Navbar>
      <Modal></Modal>
    </header>
  );
};
