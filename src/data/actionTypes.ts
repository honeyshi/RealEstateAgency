export enum AuthorizationActionTypes {
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
}

export enum CleanActionTypes {
  CLEAN_PROPERTY_DETAILS = 'CLEAN_PROPERTY_DETAILS',
  CLEAN_NEW_ADVERTISMENT = 'CLEAN_NEW_ADVERTISMENT',
  CLEAN_FILTERS = 'CLEAN_FILTERS',
}

export enum PropertyDetailsActionTypes {
  SET_DISTRICT = 'SET_DISTRICT',
  SET_METRO = 'SET_METRO',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_STREET = 'SET_STREET',
  SET_HOUSE_NUMBER = 'SET_HOUSE_NUMBER',
  SET_GEO = 'SET_GEO',
  SET_ROOMS_AMOUNT = 'SET_ROOMS_AMOUNT',
  SET_CURRENT_FLOOR = 'SET_CURRENT_FLOOR',
  SET_TOTAL_FLOORS = 'SET_TOTAL_FLOORS',
  SET_TOTAL_SPACE = 'SET_TOTAL_SPACE',
  SET_RENOVATION_TYPE = 'SET_RENOVATION_TYPE',
}

export enum PropertyFacilitiesActionTypes {
  SET_FACILITIES = 'SET_FACILITIES',
  SET_LIVING_RULES = 'SET_LIVING_RULES',
  SET_AD_DESCRIPTION = 'SET_AD_DESCRIPTION',
}

export enum PropertyPhotosActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  SET_PRIMARY_IMAGE = 'SET_PRIMARY_IMAGE',
}

export enum OwnerContactsActionTypes {
  SET_RENT_PAYMENT = 'SET_RENT_PAYMENT',
  SET_RENT_PAYMENT_RULE = 'SET_RENT_PAYMENT_RULE',
  SET_WITH_DEPOSIT = 'SET_WITH_DEPOSIT',
  SET_RENT_DEPOSIT = 'SET_RENT_DEPOSIT',
  SET_TELEPHONE_NUMBER = 'SET_TELEPHONE_NUMBER',
}

export enum NewAdvertismentActionTypes {
  SET_ACTIVE_STEP = 'SET_ACTIVE_STEP',
  SET_PROPERTY_TYPE = 'SET_PROPERTY_TYPE',
  SET_WRONG_STEPS = 'SET_WRONG_STEPS',
  SET_VALIDATED_FORM = 'SET_VALIDATED_FORM',
}

export enum AdvertismentFilterActionTypes {
  SET_PROPERTY_TYPE = 'SET_PROPERTY_TYPE',
  SET_DISTRICT = 'SET_DISTRICT',
  SET_RENT_PAYMENT = 'SET_RENT_PAYMENT',
  SET_ROOMS = 'SET_ROOMS',
  SET_SPACE = 'SET_SPACE',
  SET_FACILITIES = 'SET_FACILITIES',
  SET_LIVING_RULES = 'SET_LIVING_RULES',
  SET_SORTING = 'SET_SORTING',
  SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE',
}
