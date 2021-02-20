import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Flexbox, Icon } from 'shared/base';
import { ImportedIcon } from 'shared/base/icon';
import { PropertyType } from '../propertyType';
import { SectionHeader } from '../sectionHeader';
import { AddressSection } from './addressSection';
import { FlatDetails, RoomDetails, HouseDetails } from './detailsSection';
import { cleanPropertyDetails, setActiveStep } from 'data/actions';
import { StoreType } from 'core/store';

const propertyTypes = [
  { iconName: 'home', type: 'Квартира', key: 'flat-type' },
  { iconName: 'home', type: 'Комната', key: 'room-type' },
  { iconName: 'home', type: 'Дом', key: 'house-type' },
];

export const PropertyDescriptionPage: React.FC = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: StoreType) => state.newAdvertisment.activeStep);
  const [activePropertyType, setActivePropertyType] = useState('flat-type');

  const propertyTypeComponents = useMemo(() => {
    const stepItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.type}
          active={propertyType.key === activePropertyType}
          onClick={() => {
            setActivePropertyType(propertyType.key);
            dispatch(cleanPropertyDetails());
          }}
          key={propertyType.key}>
          <Icon name={propertyType.iconName as ImportedIcon} style={{ height: '3.75rem', width: '3.75rem' }} mt="3" />
        </PropertyType>
      );
    });
    return stepItems;
  }, [dispatch, activePropertyType]);

  const renderSwitch = (param: string) => {
    switch (param) {
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
        <Button fontLight text="accent" onClick={() => dispatch(setActiveStep(activeStep + 1))}>
          Следующий шаг <Icon name="arrow-right" ml="3" />
        </Button>
      </Flexbox>
    </>
  );
};
