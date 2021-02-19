import React, { useMemo, useState } from 'react';

import { Flexbox, Icon } from 'shared/base';
import { PropertyType } from '../propertyType';
import { ImportedIcon } from 'shared/base/icon';
import { SectionHeader } from '../sectionHeader';
import { AddressSection } from './addressSection';
import { FlatDetails } from './detailsSection/flatDetails';
import { RoomDetails } from './detailsSection/roomDetails';

const propertyTypes = [
  { iconName: 'home', type: 'Квартира', key: 'flat-type' },
  { iconName: 'home', type: 'Комната', key: 'room-type' },
  { iconName: 'home', type: 'Дом', key: 'house-type' },
];

export const PropertyDescriptionPage: React.FC = () => {
  const [active, setActive] = useState('flat-type');
  const propertyTypeComponents = useMemo(() => {
    const stepItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.type}
          active={propertyType.key === active}
          onClick={() => setActive(propertyType.key)}
          key={propertyType.key}>
          <Icon name={propertyType.iconName as ImportedIcon} style={{ height: '3.75rem', width: '3.75rem' }} mt="3" />
        </PropertyType>
      );
    });
    return stepItems;
  }, [active]);
  return (
    <>
      <SectionHeader>Выберите тип недвижимости</SectionHeader>
      <Flexbox justifyContent="between">{propertyTypeComponents}</Flexbox>
      <AddressSection />
      <SectionHeader>Информация об объекте</SectionHeader>
      <FlatDetails />
      <RoomDetails />
    </>
  );
};
