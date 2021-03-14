import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Flexbox } from 'shared/base';
import { PropertyType } from '../propertyType';
import { SectionHeader } from '../base';
import { AddressSection } from './addressSection';
import { FlatDetails, RoomDetails, HouseDetails } from './detailsSection';
import { cleanPropertyDetails, setPropertyType, setValidatedForm } from 'data/actions';
import { NextStep } from '../stepsSwitcher';
import { StoreType } from 'core/store';
import { RemixIcon } from 'shared/base/remixIcon';

const propertyTypes = [
  { iconName: 'building', type: 'Квартира', key: 'flat-type' },
  { iconName: 'collage', type: 'Комната', key: 'room-type' },
  { iconName: 'home-4', type: 'Дом', key: 'house-type' },
];

export const PropertyDescriptionPage: React.FC = () => {
  const dispatch = useDispatch();
  const activePropertyType = useSelector((state: StoreType) => state.newAdvertisment.propertyType);

  const propertyTypeComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.type}
          active={propertyType.key === activePropertyType}
          onClick={() => {
            dispatch(setPropertyType(propertyType.key));
            dispatch(setValidatedForm(false));
            dispatch(cleanPropertyDetails());
          }}
          key={propertyType.key}>
          <RemixIcon name={propertyType.iconName} size="xl" />
        </PropertyType>
      );
    });
    return propertyTypeItems;
  }, [dispatch, activePropertyType]);

  const renderSwitch = (propertyType: string) => {
    switch (propertyType) {
      case 'flat-type':
        return <FlatDetails />;
      case 'room-type':
        return <RoomDetails />;
      case 'house-type':
        return <HouseDetails />;
    }
  };
  return (
    <>
      <SectionHeader>Выберите тип недвижимости</SectionHeader>
      <Flexbox justifyContent="between">{propertyTypeComponents}</Flexbox>
      <AddressSection />
      <SectionHeader>Информация об объекте</SectionHeader>
      {renderSwitch(activePropertyType)}
      <Flexbox justifyContent="end">
        <NextStep />
      </Flexbox>
    </>
  );
};
