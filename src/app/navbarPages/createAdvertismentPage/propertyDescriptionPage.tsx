import React, { useMemo, useState } from 'react';
import { Flexbox, Icon, TextField } from 'shared/base';
import { PropertyType } from 'pageParts/propertyType';
import { ImportedIcon } from 'shared/base/icon';

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
          <Icon
            name={propertyType.iconName as ImportedIcon}
            style={{ height: '3.75rem', width: '3.75rem' }}
            mt="3"
          />
        </PropertyType>
      );
    });
    return stepItems;
  }, [active]);
  return (
    <>
      <TextField bold tag="h5" my="5">
        Выберите тип недвижимости
      </TextField>
      <Flexbox justifyContent="between">{propertyTypeComponents}</Flexbox>
    </>
  );
};
