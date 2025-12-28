import { useContext } from "react";
import { Shared } from "../utils/shared";
import { DropdownContext } from "./DropdownMenu";

export const DropdownItem = ({
  text,
  activeStateName,
  onClick,
}: {
  text: string;
  activeStateName: string;
  onClick?: () => void;
}) => {
  const { activeDropdownLink } = useContext(DropdownContext);
  return (
    <li
      className={`dropdown-item ${Shared.shouldElementBeActive(
        activeDropdownLink,
        activeStateName
      )}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {text}
    </li>
  );
};
