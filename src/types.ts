export type TDropdownMenu = "menus" | "none";

export type TDropdownContext = {
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
};
