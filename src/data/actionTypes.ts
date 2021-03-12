export enum CleanActionTypes {
  CLEAN_PROPERTY_DETAILS = 'CLEAN_PROPERTY_DETAILS',
  CLEAN_NEW_ADVERTISMENT = 'CLEAN_NEW_ADVERTISMENT',
}

export enum PropertyDetailsActionTypes {
  SET_ROOMS_AMOUNT = 'SET_ROOMS_AMOUNT',
  SET_RENT_ROOMS_AMOUNT = 'SET_RENT_ROOMS_AMOUNT',
  SET_CURRENT_FLOOR = 'SET_CURRENT_FLOOR',
  SET_TOTAL_FLOORS = 'SET_TOTAL_FLOORS',
  SET_TOTAL_SPACE = 'SET_TOTAL_SPACE',
  SET_LIVING_SPACE = 'SET_LIVING_SPACE',
  SET_KITCHEN_SPACE = 'SET_KITCHEN_SPACE',
  SET_BATHROOM_TYPE = 'SET_BATHROOM_TYPE',
  SET_RENOVATION_TYPE = 'SET_RENOVATION_TYPE',
  SET_HOUSE_TYPE = 'SET_HOUSE_TYPE',
  SET_SHOWER_TYPE = 'SET_SHOWER_TYPE',
}

export enum PropertyFacilitiesActionTypes {
  SET_FACILITIES = 'SET_FACILITIES',
  SET_FURNITURE_TYPE = 'SET_FURNITURE_TYPE',
  SET_LIVING_RULES = 'SET_LIVING_RULES',
  SET_AD_HEADER = 'SET_AD_HEADER',
  SET_AD_DESCRIPTION = 'SET_AD_DESCRIPTION',
}

export enum PropertyPhotosActionTypes {
  SET_VIDEO_LINK = 'SET_VIDEO_LINK',
}

export enum OwnerContactsActionTypes {
  SET_RENT_PAYMENT = 'SET_RENT_PAYMENT',
  SET_RENT_PAYMENT_RULES = 'SET_RENT_PAYMENT_RULES',
  SET_RENT_DEPOSIT = 'SET_RENT_DEPOSIT',
  SET_OWNER_NAME = 'SET_OWNER_NAME',
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
}
