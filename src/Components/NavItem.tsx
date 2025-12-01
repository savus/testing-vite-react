import { type ReactNode } from "react";
import { useDropdownContext } from "./Providers/DropdownStateProvider";

export const NavItem = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => {
  const { setDropdownMenu } = useDropdownContext();
  return (
    <li className="nav-item">
      <a href="#" onClick={() => setDropdownMenu("menus")}>
        {text}
      </a>
      {children}
    </li>
  );
};
