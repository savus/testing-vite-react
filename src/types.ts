import type { ComponentProps } from "react";

export type TInputProps = ComponentProps<"input">;

export type TVisibleModal = "form" | "menus" | "gallery" | "none";

export type TDropdownMenu = "menus" | "none";

export type TPhoneInput = [string, string, string];

export type TPhoneInputAlt = string;

export type TUserInfo = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
  phoneInput: TPhoneInput | TPhoneInputAlt;
};
