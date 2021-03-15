export {
  setPropertyTypeFilter,
  setDistrictFilter,
  setRoomsFilter,
  setFacilitiesFilter,
  setLivingRulesFilter,
} from './advertismentFilterActions';

export { cleanPropertyDetails, cleanNewAdvertisment, cleanFilters } from './cleanActions';

export { setActiveStep, setPropertyType, setWrongSteps, setValidatedForm } from './newAdvertismentActions';

export {
  setRoomsAmount,
  setRoomsRentAmount,
  setCurrentFloor,
  setTotalFloors,
  setTotalSpace,
  setLivingSpace,
  setKitchenSpace,
  setRenovationType,
  setHouseType,
} from './propertyDetailsActions';

export { setFacilities, setFurnitureType, setLivingRules, setDescription } from './propertyFacilitiesActions';

export { setVideoLink } from './propertyPhotosActions';

export { setRentPayment, setRentPaymentRules, setRentDeposit, setTelephoneNumber } from './ownerContactsActions';
