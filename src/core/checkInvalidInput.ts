export const checkInvalidInput = (label: string, errorMessage: string | string[]) => {
  if (Array.isArray(errorMessage)) return errorMessage.some((message) => message.includes(label));
  else return errorMessage.includes(label);
};
