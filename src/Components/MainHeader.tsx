import "../css/header.css";
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
      </NavbarReact>
    </header>
  );
};
