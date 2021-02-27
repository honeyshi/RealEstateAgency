export const checkAdvertismentField = (validated: boolean, fieldValue: string | string[]) => {
  return validated && fieldValue.length === 0;
};
