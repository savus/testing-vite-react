import { DropdownMenu } from "./DropdownMenu";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { useModalContext } from "./Providers/ModalContextProvider";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const Header = () => {
  const { dropdownMenu, setDropdownMenu, dropdownRef } =
    useNavbarStateContext();
  const { setVisibleModal } = useModalContext();
  return (
    <header className="main-header">
      <Navbar>
        <NavItem
          text="Form"
          activeStateName="form"
          onClick={() => {
            setVisibleModal("form");
          }}
        />
        <NavItem
          text="Menus"
          activeStateName="menus"
          onClick={() => {
            const toggle = dropdownMenu === "menus" ? "none" : "menus";
            setDropdownMenu(toggle);
          }}
          dropdownRef={dropdownRef}
        >
          <DropdownMenu dropdownStateName="menus" />
        </NavItem>
        <NavItem text="Gallery" activeStateName="gallery" />
        <NavItem text="Animations" activeStateName="animations" />
      </Navbar>
      <div>
        Users:
        <ul></ul>
      </div>
      <div>Active User:</div>
    </header>
  );
};
