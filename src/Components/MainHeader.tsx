import "../css/header.css";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownReact";
// import { Navbar } from "./Navbar";
import { NavbarReact } from "./NavbarReact";
import { NavItem } from "./NavItem";

export const MainHeader = () => {
  return (
    <header className="main-header">
      {/* <Navbar /> */}
      <NavbarReact>
        <NavItem icon={"🔔"} />
        <NavItem icon={"➕"} />
        <NavItem icon={"🗨️"} />
        <NavItem icon={"🔽"}>
          <DropdownMenu>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem leftIcon={"⚙️"}>Settings</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </NavbarReact>
    </header>
  );
};
