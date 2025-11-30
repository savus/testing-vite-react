import type { ReactNode } from "react";

export const DropdownItem = ({
  children,
  leftIcon,
  rightIcon,
}: {
  children?: ReactNode;
  leftIcon?: string;
  rightIcon?: string;
}) => {
  return (
    <a href="#" className="menu-item">
      {leftIcon && <span className="icon-button">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon-button">{rightIcon}</span>}
    </a>
  );
};
