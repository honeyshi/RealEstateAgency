export { cleanPropertyDetails, cleanNewAdvertisment } from './cleanActions';

export { setActiveStep, setPropertyType, setWrongSteps } from './newAdvertismentActions';

export {
  setRoomsAmount,
  setRoomsRentAmount,
  setCurrentFloor,
  setTotalFloors,
  setTotalSpace,
  setLivingSpace,
  setKitchenSpace,
  setBathroomType,
  setRenovationType,
  setHouseType,
  setShowerType,
} from './propertyDetailsActions';

export {
  setFacilities,
  setFurnitureType,
  setLivingRules,
  setHeader,
  setDescription,
} from './propertyFacilitiesActions';

export { setVideoLink } from './propertyPhotosActions';

export {
  setRentPayment,
  setRentPaymentRules,
  setRentDeposit,
  setOwnerName,
  setTelephoneNumber,
} from './ownerContactsActions';
