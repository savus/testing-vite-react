import type { TRegexPatterns } from "./types";

export const regexPatterns: TRegexPatterns = {
  name: /^([a-zA-Z]{2,20})([ ]*)?$/,
  email:
    /^([a-zA-Z0-9\.-]{2,30})@([a-zA-Z0-9\.-]{2,30})\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^(\d{3})[ -]?(\d{3})[ -]?(\d{4})$/,
  city: /^[a-zA-Z]+([ a-zA-Z]+)?$/,
};

export const isValid = (pattern: string, input: string): boolean =>
  regexPatterns[pattern].test(input);
