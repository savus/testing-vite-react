import type { ComponentProps, RefObject } from "react";

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

export type TFilterLink = "all" | "web" | "app" | "ui" | "none";

export type TFilterContext = {
  activeFilterLink: TFilterLink;
  setActiveFilterLink: (link: TFilterLink) => void;
};

export type TPortfolioFilter = "web" | "app" | "ui";

export type TPortfolioCard = {
  img: string;
  popupHeader: string;
  popupText: string;
  filter: TPortfolioFilter;
};

export type TVisibleModal = "form" | "none";

export type TModalContext = {
  visibleModal: TVisibleModal;
  setVisibleModal: (modal: TVisibleModal) => void;
};

export type TInputProps = ComponentProps<"input">;

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phone: string;
};

export type TUserInformation = {
  allUsers: TUser[];
  setAllUsers: (users: TUser[]) => void;
  userInformation: Omit<TUser, "id"> | null;
  setUserInformation: (info: Omit<TUser, "id">) => void;
  createUser: (user: Omit<TUser, "id">) => void;
};

export type TPhoneInput = [string, string, string];

export type TRegexPatterns = {
  [key: string]: RegExp;
};

export type TNote = {
  id: number;
  title: string;
  content: string;
};
