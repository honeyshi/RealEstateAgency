import { IOwnerContactsInitialState } from 'data/reducers/ownerContactsReducer';
import { IPropertyDetailsInitialState } from 'data/reducers/propertyDetailsReducer';
import { IPropertyFacilitiesInitialState } from 'data/reducers/propertyFacilitiesReducer';

const checkSpecificFieldsAreFilled = (fields: any, notInArray: string[]) => {
  return Object.keys(fields)
    .filter((key) => !notInArray.includes(key))
    .every((key) => Object(fields)[key].length !== 0);
};

const checkAllFieldsAreFilled = (fields: any) => {
  return Object.keys(fields).every((key) => Object(fields)[key].length !== 0);
};

export const checkNewAdvertismentFields = (
  propertyType: string,
  propertyDetails: IPropertyDetailsInitialState,
  propertyFacilities: IPropertyFacilitiesInitialState,
  ownerContacts: IOwnerContactsInitialState
) => {
  let notIncludedProps: string[] = [];
  switch (propertyType) {
    case 'flat-type':
      notIncludedProps = ['roomsRentAmount', 'houseType', 'showerType'];
      break;
    case 'room-type':
      notIncludedProps = ['houseType', 'showerType'];
      break;
    case 'house-type':
      notIncludedProps = [
        'roomsAmount',
        'roomsRentAmount',
        'totalFloors',
        'livingSpace',
        'kitchenSpace',
        'bathroomType',
      ];
      break;
  }

  const wrongSteps: number[] = [];

  !checkSpecificFieldsAreFilled(propertyDetails, notIncludedProps) && wrongSteps.push(1);

  !checkAllFieldsAreFilled(propertyFacilities) && wrongSteps.push(2);

  ownerContacts.rentPaymentRules.includes('Есть залог')
    ? !checkAllFieldsAreFilled(ownerContacts) && wrongSteps.push(4)
    : !checkSpecificFieldsAreFilled(ownerContacts, ['rentDeposit']) && wrongSteps.push(4);
    
  return wrongSteps;
};
