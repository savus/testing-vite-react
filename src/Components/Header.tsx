import { DropdownMenu } from "./DropdownMenu";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";
import { useModalContext } from "./Providers/ModalContextProvider";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";
import { useUserContext } from "./Providers/UserInfoProvider";
import { User } from "./User";

export const Header = () => {
  const { dropdownMenu, setDropdownMenu, dropdownRef } =
    useNavbarStateContext();
  const { setVisibleModal } = useModalContext();
  const { allUsers } = useUserContext();

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
    </header>
  );
};
