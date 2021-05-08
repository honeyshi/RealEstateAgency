import { AreaPriceRange, districts } from 'data/values';
import { Button, Flexbox, TextField } from 'shared/base';
import React, { useEffect } from 'react';
import {
  cleanFilters,
  setDistrictFilter,
  setPropertyTypeFilter,
  setRentPaymentFilter,
  setRoomsFilter,
  setSpaceFilter,
} from 'data/actions';
import { setApplyFilter, setWithFilter } from 'data/actions/advertismentFilterActions';

import { Select } from 'shared/composite/select';
import { history } from 'core/history';
import { useDispatch } from 'react-redux';

export const propertyTypeToValue = new Map([
  ['Квартира', '1'],
  ['Комната', '2'],
  ['Дом', '0'],
]);

export const pricesToValue = new Map([
  ['до 20 тыс. рублей', { min: AreaPriceRange.min, max: 20 }],
  ['до 30 тыс. рублей', { min: AreaPriceRange.min, max: 30 }],
  ['до 40 тыс. рублей', { min: AreaPriceRange.min, max: 40 }],
  ['до 50 тыс. рублей', { min: AreaPriceRange.min, max: 50 }],
  ['свыше 50 тыс. рублей', { min: 50, max: AreaPriceRange.max }],
]);

export const areaToValue = new Map([
  ['до 30 м²', { min: AreaPriceRange.min, max: 30 }],
  ['до 40 м²', { min: AreaPriceRange.min, max: 40 }],
  ['до 50 м²', { min: AreaPriceRange.min, max: 50 }],
  ['до 60 м²', { min: AreaPriceRange.min, max: 60 }],
  ['свыше 60 м²', { min: 60, max: AreaPriceRange.max }],
]);

export const roomToValue = new Map([
  ['Студия', '0'],
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['свыше 4', '4'],
]);

export const StartPageFilters: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanFilters());
    // eslint-disable-next-line
  }, []);

  return (
    <Flexbox justifyContent="between" directionSize="md" pt="5" className="flex-column">
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Тип недвижимости
        </TextField>
        <Select
          selectOptions={Array.from(propertyTypeToValue.keys())}
          selectText="Тип недвижимости"
          onSelectValue={(propertyType) => dispatch(setPropertyTypeFilter(propertyTypeToValue.get(propertyType) ?? ''))}
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Район
        </TextField>
        <Select
          selectOptions={districts}
          selectText="Район"
          onSelectValue={(district) => dispatch(setDistrictFilter([districts.indexOf(district)]))}
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Стоимость
        </TextField>
        <Select
          selectOptions={Array.from(pricesToValue.keys())}
          selectText="Стоимость"
          onSelectValue={(price) =>
            dispatch(
              setRentPaymentFilter(pricesToValue.get(price) ?? { min: AreaPriceRange.min, max: AreaPriceRange.max })
            )
          }
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Площадь
        </TextField>
        <Select
          selectOptions={Array.from(areaToValue.keys())}
          selectText="Площадь"
          onSelectValue={(area) =>
            dispatch(setSpaceFilter(areaToValue.get(area) ?? { min: AreaPriceRange.min, max: AreaPriceRange.max }))
          }
        />
      </Flexbox>
      <Flexbox vertical pb="3">
        <TextField tag="span" bold>
          Комнатность
        </TextField>
        <Select
          selectOptions={Array.from(roomToValue.keys())}
          selectText="Комнатность"
          onSelectValue={(room) => dispatch(setRoomsFilter([roomToValue.get(room) ?? '']))}
        />
      </Flexbox>
      <Button
        fontLight
        className="rounded-link"
        mt="4"
        h="25"
        onClick={() => {
          dispatch(setApplyFilter(true));
          dispatch(setWithFilter(true));
          history.push('/flats');
        }}>
        Показать объекты
      </Button>
    </Flexbox>
  );
};
