import React, { useMemo } from 'react';
import ReactTooltip from 'react-tooltip';
import { useDispatch, useSelector } from 'react-redux';

import { CheckBox, CheckboxOption, Column, Flexbox, RemixIcon, TextField } from 'shared/base';
import { districts, propertyTypes, facilityOptions, livingRules } from './data';
import { setDistrictFilter, setFacilitiesFilter, setLivingRulesFilter, setPropertyTypeFilter } from 'data/actions';
import { StoreType } from 'core/store';
import { CheckboxFilter } from './chexboxFilter';

import './filters.scss';

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
          name={district.id}
          value={advertismentFilter.districts.includes(district.id)}
          onChange={(value) =>
            value
              ? dispatch(setDistrictFilter(advertismentFilter.districts.concat(district.id)))
              : dispatch(
                  setDistrictFilter(
                    advertismentFilter.districts.filter((selectedDistrict) => {
                      return selectedDistrict !== district.id;
                    })
                  )
                )
          }
          key={district.id}>
          {district.name}
        </CheckBox>
      );
    });
    return districtItems;
  }, [dispatch, advertismentFilter.districts]);

  const facilitiesItemComponents = useMemo(() => {
    const facilityItems = facilityOptions.map((facility) => {
      return (
        <CheckBox
          name={facility.id}
          value={advertismentFilter.facilities.includes(facility.id)}
          onChange={(value) =>
            value
              ? dispatch(setFacilitiesFilter(advertismentFilter.facilities.concat(facility.id)))
              : dispatch(
                  setFacilitiesFilter(
                    advertismentFilter.facilities.filter((selectedFacility) => {
                      return selectedFacility !== facility.id;
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
      <CheckboxFilter filterName="Удобства">{facilitiesItemComponents}</CheckboxFilter>
      <CheckboxFilter filterName="Условия проживания">{livingRulesItemComponents}</CheckboxFilter>
    </Column>
  );
};
