import { DropdownMenu } from "./DropdownMenu";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { useDropdownContext } from "./Providers/DropdownMenuStateProvider";

export const Header = () => {
  const { dropdownRef } = useDropdownContext();
  return (
    <header className="main-header">
      <Navbar>
        <NavItem text="Form" activeStatename="form" />
        <NavItem text="Menus" activeStatename="menus" menuRef={dropdownRef}>
          <DropdownMenu />
        </NavItem>
        {/* <NavItem text="Gallery" activeStatename="none" /> */}
        {/* <NavItem text="List Item" activeStatename="none" /> */}
      </Navbar>
      {/* <Modal></Modal> */}
    </header>
  );
};
