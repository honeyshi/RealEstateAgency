import './filters.scss';
import 'react-input-range/lib/css/index.css';

import { Button, CheckBox, CheckboxOption, Column, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useMemo } from 'react';
import {
  cleanFilters,
  setDistrictFilter,
  setFacilitiesFilter,
  setLivingRulesFilter,
  setPropertyTypeFilter,
  setRentPaymentFilter,
  setRoomsFilter,
  setSpaceFilter,
} from 'data/actions';
import { districts, propertyTypes, roomsAmount } from 'data/values';
import { facilityOptions, livingRules } from './data';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxFilter } from './chexboxFilter';
import InputRange from 'react-input-range';
import ReactTooltip from 'react-tooltip';
import { StoreType } from 'core/store';
import classNames from 'classnames';

export const FiltersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const advertismentFilter = useSelector((state: StoreType) => state.advertismentFilter);

  const propertyTypeItemComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <CheckboxOption
          circle
          selected={propertyType.value === advertismentFilter.propertyType}
          onClick={() => dispatch(setPropertyTypeFilter(propertyType.value))}
          key={propertyType.id}>
          <RemixIcon name={propertyType.iconName} data-tip data-for={propertyType.id} />
          <ReactTooltip id={propertyType.id} arrowColor="white" className="tooltip-light">
            {propertyType.text}
          </ReactTooltip>
        </CheckboxOption>
      );
    });
    return propertyTypeItems;
  }, [dispatch, advertismentFilter.propertyType]);

  const districtItemComponents = useMemo(() => {
    const districtItems = districts.map((district) => {
      return (
        <CheckBox
          name={district}
          value={advertismentFilter.districts.includes(districts.indexOf(district))}
          onChange={(value) =>
            value
              ? dispatch(setDistrictFilter(advertismentFilter.districts.concat(districts.indexOf(district))))
              : dispatch(
                  setDistrictFilter(
                    advertismentFilter.districts.filter((selectedDistrict) => {
                      return selectedDistrict !== districts.indexOf(district);
                    })
                  )
                )
          }
          key={district}>
          {district}
        </CheckBox>
      );
    });
    return districtItems;
  }, [dispatch, advertismentFilter.districts]);

  const roomItemComponents = useMemo(() => {
    const roomItems = roomsAmount.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          selected={advertismentFilter.rooms.includes(room.value)}
          onClick={() =>
            advertismentFilter.rooms.includes(room.value)
              ? dispatch(
                  setRoomsFilter(
                    advertismentFilter.rooms.filter((selectedRoom) => {
                      return selectedRoom !== room.value;
                    })
                  )
                )
              : dispatch(setRoomsFilter(advertismentFilter.rooms.concat(room.value)))
          }
          key={room.id}
          mr="2"
          mb="3">
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [dispatch, advertismentFilter.rooms]);

  const facilitiesItemComponents = useMemo(() => {
    const facilityItems = facilityOptions.map((facility) => {
      return (
        <CheckBox
          name={facility.id}
          value={advertismentFilter.facilities.includes(facility.value)}
          onChange={(value) =>
            value
              ? dispatch(setFacilitiesFilter(advertismentFilter.facilities.concat(facility.value)))
              : dispatch(
                  setFacilitiesFilter(
                    advertismentFilter.facilities.filter((selectedFacility) => {
                      return selectedFacility !== facility.value;
                    })
                  )
                )
          }
          key={facility.id}>
          {facility.text}
        </CheckBox>
      );
    });
    return facilityItems;
  }, [dispatch, advertismentFilter.facilities]);

  const livingRulesItemComponents = useMemo(() => {
    const livingRulesItems = livingRules.map((livingRule) => {
      return (
        <CheckBox
          name={livingRule.id}
          value={advertismentFilter.livingRules.includes(livingRule.id)}
          onChange={(value) =>
            value
              ? dispatch(setLivingRulesFilter(advertismentFilter.livingRules.concat(livingRule.id)))
              : dispatch(
                  setLivingRulesFilter(
                    advertismentFilter.livingRules.filter((selectedLivingRule) => {
                      return selectedLivingRule !== livingRule.id;
                    })
                  )
                )
          }
          key={livingRule.id}>
          {livingRule.text}
        </CheckBox>
      );
    });
    return livingRulesItems;
  }, [dispatch, advertismentFilter.livingRules]);

  return (
    <Column size={3}>
      <TextField mb="4">Тип недвижимости</TextField>
      <Flexbox justifyContent="between">{propertyTypeItemComponents}</Flexbox>
      <CheckboxFilter filterName="Район">{districtItemComponents}</CheckboxFilter>
      <TextField mb="4">Стоимость аренды</TextField>
      <Flexbox py="4">
        <InputRange
          formatLabel={(value) => `${value} тыс. руб.`}
          maxValue={300}
          minValue={5}
          value={advertismentFilter.rentPayment}
          step={5}
          onChange={(value) => dispatch(setRentPaymentFilter(value))}
        />
      </Flexbox>
      {advertismentFilter.propertyType !== '2' && ( // room doesn't have rooms amount and house can not be studio
        <>
          <TextField my="4">Количество комнат</TextField>
          <Flexbox wrap justifyContent="between">
            {advertismentFilter.propertyType === '0' ? roomItemComponents.slice(0, -1) : roomItemComponents}
          </Flexbox>
        </>
      )}
      <TextField classes={classNames(advertismentFilter.propertyType !== '2' ? 'mb-4' : 'my-4')}>Площадь</TextField>
      <Flexbox py="4">
        <InputRange
          formatLabel={(value) => `${value} м²`}
          maxValue={300}
          minValue={5}
          value={advertismentFilter.space}
          step={5}
          onChange={(value) => dispatch(setSpaceFilter(value))}
        />
      </Flexbox>
      <CheckboxFilter filterName="Удобства">{facilitiesItemComponents}</CheckboxFilter>
      <CheckboxFilter filterName="Условия проживания">{livingRulesItemComponents}</CheckboxFilter>
      <Flexbox
        justifyContent="between"
        text="accent"
        className="cursor-pointer"
        mb="4"
        onClick={() => dispatch(cleanFilters())}>
        Сбросить фильтры
        <RemixIcon name="refresh" />{' '}
      </Flexbox>
      <Button primary w="100">
        Поиск
      </Button>
    </Column>
  );
};
