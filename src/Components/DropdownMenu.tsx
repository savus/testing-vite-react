import { createContext, useState } from "react";
import type { TActiveDropdown } from "../types";
import { Shared } from "../utils/shared";
import { useActiveContext } from "./Providers/ActiveStateProvider";
import { DropdownItem } from "./DropdownItem";

type TDropdownContext = {
  activeDropdownLink: string;
  setActiveDropdownLink: (link: string) => void;
};

export const DropdownContext = createContext({} as TDropdownContext);

export const DropdownMenu = ({
  dropdownName,
  activeLinkNames,
}: {
  dropdownName: TActiveDropdown;
  activeLinkNames: string[];
}) => {
  const { activeNavDropdown } = useActiveContext();
  const [activeDropdownLink, setActiveDropdownLink] = useState("none");

  return (
    <DropdownContext.Provider
      value={{ activeDropdownLink, setActiveDropdownLink }}
    >
      <div
        className={`dropdown-menu ${Shared.shouldElementBeActive(
          activeNavDropdown,
          dropdownName
        )}`}
      >
        <ul className="ul-defaults-none">
          {activeLinkNames.map((name) => (
            <DropdownItem
              key={name}
              text={name}
              activeStateName={name}
              onClick={() => {
                setActiveDropdownLink(name);
              }}
            />
          ))}
        </ul>
      </div>
    </DropdownContext.Provider>
  );
};
