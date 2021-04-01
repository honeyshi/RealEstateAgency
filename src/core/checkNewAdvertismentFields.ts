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
  propertyPhotos: number[],
  ownerContacts: IOwnerContactsInitialState
) => {
  let notIncludedProps: string[] = [];

  switch (propertyType) {
    case '1': // room
      notIncludedProps = ['roomsAmount'];
      break;
    case '2': // house
      notIncludedProps = ['roomsAmount', 'currentFloor'];
      break;
    default:
      notIncludedProps = [];
      break;
  }

  const wrongSteps: number[] = [];

  (!checkSpecificFieldsAreFilled(propertyDetails, notIncludedProps) || propertyDetails.district === -1) &&
    wrongSteps.push(1);

  !checkAllFieldsAreFilled(propertyFacilities) && wrongSteps.push(2);

  propertyPhotos.length === 0 && wrongSteps.push(3);

  ownerContacts.withDeposit
    ? !checkAllFieldsAreFilled(ownerContacts) && wrongSteps.push(4)
    : !checkSpecificFieldsAreFilled(ownerContacts, ['rentDeposit']) && wrongSteps.push(4);

  return wrongSteps;
};
