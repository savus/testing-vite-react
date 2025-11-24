export const patterns = {
  nameValidation: /^[a-zA-Z]{3,10}$/,
  telephone: /^(\+1)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{4}$/,
  email: /^([a-zA-Z\d.-]){2,30}@([a-z.-]){2,8}(\.[a-z]{2,8})(\.[a-z]{2,8})?$/,
};

export const isNameValid = (message: string): boolean =>
  patterns.nameValidation.test(message);

export const isPhoneValid = (message: string): boolean =>
  patterns.telephone.test(message);

export const isEmailValid = (message: string): boolean =>
  patterns.email.test(message);

export const validate = (regex: RegExp, value: string): boolean =>
  regex.test(value);
