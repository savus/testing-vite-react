import type { ReactNode } from "react";
import "../css/navbar-react.css";

export const NavbarReact = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav ul-defaults-none">{children}</ul>
    </nav>
  );
};
