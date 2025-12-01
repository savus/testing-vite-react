import type { RefObject } from "react";

export type TActiveLink = "form" | "menus" | "none";

export type TActiveLinkContext = {
  activeLink: TActiveLink;
  setActiveLink: (link: TActiveLink) => void;
};

export type TDropdownMenu = "menus" | "none";

export type TDropdownContext = {
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
  dropdownRef: RefObject<HTMLLIElement | null>;
};
