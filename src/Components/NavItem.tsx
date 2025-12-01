import type { ReactNode } from "react";

export const NavItem = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => {
  return (
    <li className="nav-item">
      <a href="#">{text}</a>
      {children}
    </li>
  );
};
