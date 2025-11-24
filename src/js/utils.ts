export const patterns = {};

export const isNameValid = (message: string): boolean => {
  return message.length > 2 && message.length < 15;
};
