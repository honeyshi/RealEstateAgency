import { Button, CheckBox, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useMemo } from 'react';
import { Sex, districts, ownSexCheckboxes, sexCheckboxes } from 'data/values';
import {
  cleanCotenantFilters,
  setCotenantAgeFilter,
  setCotenantDistrictFilter,
  setCotenantSexFilter,
  setOwnCotenantAgeFilter,
  setOwnCotenantSexFilter,
} from 'data/actions';
import { setApplyCotenantFilter, setWithCotenantFilter } from 'data/actions/cotenantFilterActions';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxFilter } from 'pageParts/filters';
import InputRange from 'react-input-range';
import { StoreType } from 'core/store';

export const FiltersContainer: React.FC = () => {
  const dispatch = useDispatch();
  const cotenantFilter = useSelector((state: StoreType) => state.cotenantFilter);

  const districtItemComponents = useMemo(() => {
    const districtItems = districts.map((district) => {
      return (
        <CheckBox
          name={district}
          value={cotenantFilter.districts.includes(districts.indexOf(district))}
          onChange={(value) =>
            value
              ? dispatch(setCotenantDistrictFilter(cotenantFilter.districts.concat(districts.indexOf(district))))
              : dispatch(
                  setCotenantDistrictFilter(
                    cotenantFilter.districts.filter((selectedDistrict) => {
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
  }, [dispatch, cotenantFilter.districts]);

  const cotenantSexCheckboxesItemComponents = useMemo(() => {
    const cotenantSexCheckboxesItems = sexCheckboxes.map((checkbox) => {
      return (
        <CheckBox
          name={checkbox.name}
          value={cotenantFilter.cotenantSex === checkbox.value}
          onChange={(value) =>
            value ? dispatch(setCotenantSexFilter(checkbox.value)) : dispatch(setCotenantSexFilter(Sex.initial))
          }
          key={checkbox.name}>
          {checkbox.text}
        </CheckBox>
      );
    });
    return cotenantSexCheckboxesItems;
  }, [dispatch, cotenantFilter.cotenantSex]);

  const cotenantOwnSexCheckboxesItemComponents = useMemo(() => {
    const cotenantOwnSexCheckboxesItems = ownSexCheckboxes.map((checkbox) => {
      return (
        <CheckBox
          name={checkbox.name}
          value={cotenantFilter.ownSex === checkbox.value}
          onChange={(value) =>
            value ? dispatch(setOwnCotenantSexFilter(checkbox.value)) : dispatch(setOwnCotenantSexFilter(Sex.initial))
          }
          key={checkbox.name}>
          {checkbox.text}
        </CheckBox>
      );
    });
    return cotenantOwnSexCheckboxesItems;
  }, [dispatch, cotenantFilter.ownSex]);

  return (
    <Flexbox vertical mx="5" mb="5">
      <CheckboxFilter filterName="Район">{districtItemComponents}</CheckboxFilter>
      <CheckboxFilter after filterName="Пол соарендатора">
        {cotenantSexCheckboxesItemComponents}
      </CheckboxFilter>
      <TextField mb="4">Возраст соарендатора</TextField>
      <Flexbox py="4">
        <InputRange
          formatLabel={(value) => `${value} лет`}
          maxValue={70}
          minValue={18}
          value={cotenantFilter.cotenantAge}
          onChange={(value) => dispatch(setCotenantAgeFilter(value))}
        />
      </Flexbox>
      <CheckboxFilter filterName="Ваш пол">{cotenantOwnSexCheckboxesItemComponents}</CheckboxFilter>
      <TextField mb="4">Ваш возраст</TextField>
      <Flexbox py="4" mb="4">
        <InputRange
          formatLabel={(value) => `${value} лет`}
          maxValue={70}
          minValue={18}
          value={cotenantFilter.ownAge}
          onChange={(value) => dispatch(setOwnCotenantAgeFilter(value))}
        />
      </Flexbox>
      <Flexbox
        justifyContent="between"
        text="accent"
        className="cursor-pointer"
        mb="4"
        onClick={() => {
          dispatch(cleanCotenantFilters());
          dispatch(setWithCotenantFilter(false));
        }}>
        Сбросить фильтры
        <RemixIcon name="refresh" />
      </Flexbox>
      <Button primary w="100" onClick={() => dispatch(setApplyCotenantFilter(true))}>
        Поиск
      </Button>
    </Flexbox>
  );
};
