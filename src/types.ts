import type { RefObject } from "react";

export type TActiveLink = "form" | "menus" | "gallery" | "animations" | "none";

export type TActiveLinkContext = {
  activeLink: TActiveLink;
  setActiveLink: (link: TActiveLink) => void;
};

export type TDropdownMenu = "menus" | "none";

export type TNavbarStateContext = {
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
  dropdownRef: RefObject<HTMLLIElement | null>;
  activeLink: TActiveLink;
  setActiveLink: (link: TActiveLink) => void;
};

export type TVisibleModal = "form" | "none";

export type TModalContext = {
  visibleModal: TVisibleModal;
  setVisibleModal: (modal: TVisibleModal) => void;
};
