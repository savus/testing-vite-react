import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { useDropdownContext } from "./Providers/DropdownMenuStateProvider";

export const Header = () => {
  const { dropdownRef } = useDropdownContext();
  return (
    <header className="main-header">
      <Navbar>
        <li className="nav-item">Form</li>
        <NavItem menuRef={dropdownRef} />
        <li className="nav-item">list item</li>
        <li className="nav-item">list item</li>
      </Navbar>
      {/* <Modal></Modal> */}
    </header>
  );
};
