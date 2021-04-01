import { CommonDetails, FlatDetails, HouseDetails } from './detailsSection';
import React, { useMemo } from 'react';
import { cleanPropertyDetails, setPropertyType, setValidatedForm } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { AddressSection } from './addressSection';
import { Flexbox } from 'shared/base';
import { NextStep } from '../stepsSwitcher';
import { PropertyType } from '../propertyType';
import { RemixIcon } from 'shared/base/remixIcon';
import { SectionHeader } from '../base';
import { StoreType } from 'core/store';

const propertyTypes = [
  { iconName: 'building', type: 'Квартира', key: 'flat-type', value: '0' },
  { iconName: 'collage', type: 'Комната', key: 'room-type', value: '1' },
  { iconName: 'home-4', type: 'Дом', key: 'house-type', value: '2' },
];

export const PropertyDescriptionPage: React.FC = () => {
  const dispatch = useDispatch();
  const activePropertyType = useSelector((state: StoreType) => state.newAdvertisment.propertyType);

  const propertyTypeComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.type}
          active={propertyType.value === activePropertyType}
          onClick={() => {
            dispatch(setPropertyType(propertyType.value));
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
      case '0':
        return <FlatDetails />;
      case '1':
        return <CommonDetails />;
      case '2':
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
