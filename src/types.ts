import type { ComponentProps } from "react";

export type TInputProps = ComponentProps<"input">;

export type TVisibleModal = "form" | "menus" | "gallery" | "none";

export type TDropdownMenu = "menus" | "none";

export type TNavbarStateContext = {
  visibleModal: TVisibleModal;
  setVisibleModal: (modal: TVisibleModal) => void;
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
};

export type TPhoneInput = [string, string, string];

export type TPhoneInputAlt = string;

export type TUserInfo = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phoneInput: TPhoneInput | TPhoneInputAlt;
};

export type TUserContext = {
  userInformation: TUserInfo | null;
  setUserInformation: (info: TUserInfo) => void;
};
