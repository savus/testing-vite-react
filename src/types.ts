import type { RefObject } from "react";

export type TDropdownMenu = "menus" | "none";

export type TDropdownContext = {
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
  dropdownRef: RefObject<HTMLDivElement | null>;
};
