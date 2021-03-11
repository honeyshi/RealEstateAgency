import React, { useMemo } from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption, Column, Flexbox, Icon, TextField } from 'shared/base';
import { ImportedIcon } from 'shared/base/icon';
import { propertyTypes } from './data';
import { setPropertyTypeFilter } from 'data/actions';
import { StoreType } from 'core/store';

import 'app/tooltip.scss';

export const FiltersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const advertismentFilter = useSelector((state: StoreType) => state.advertismentFilter);

  const propertyTypeItemComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <CheckboxOption
          circle
          selected={propertyType.id === advertismentFilter.propertyType}
          onClick={() => dispatch(setPropertyTypeFilter(propertyType.id))}
          key={propertyType.id}>
          <Icon name={propertyType.iconName as ImportedIcon} data-tip data-for={propertyType.id} />
          <ReactTooltip id={propertyType.id} arrowColor="white" className="tooltip-light">
            {propertyType.text}
          </ReactTooltip>
        </CheckboxOption>
      );
    });
    return propertyTypeItems;
  }, [dispatch, advertismentFilter.propertyType]);

  return (
    <Column size={3}>
      <TextField bold mb="4">
        Тип недвижимости
      </TextField>
      <Flexbox justifyContent="between">{propertyTypeItemComponents}</Flexbox>
    </Column>
  );
};
