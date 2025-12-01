import { DropdownMenu } from "./DropdownMenu";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const Header = () => {
  const { dropdownRef } = useNavbarStateContext();
  return (
    <header className="main-header">
      <Navbar>
        <NavItem text="Form" activeStateName="form" />
        <NavItem
          text="Menus"
          activeStateName="menus"
          dropdownMenuName="menus"
          menuRef={dropdownRef}
        >
          <DropdownMenu />
        </NavItem>
        <NavItem text="Gallery" activeStateName="gallery" />
        <NavItem text="Animations" activeStateName="animations" />
      </Navbar>
    </header>
  );
};
