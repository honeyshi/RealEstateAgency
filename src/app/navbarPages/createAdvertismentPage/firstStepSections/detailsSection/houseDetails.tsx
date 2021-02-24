import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import {
  setBathroomType,
  setCurrentFloor,
  setHouseType,
  setRenovationType,
  setShowerType,
  setTotalSpace,
} from 'data/actions';
import { DetailsInput } from '../../detailsInput';
import { DetailsRow } from '../../detailsRow';
import { bathroomHouseTypes, houseTypes, renovationTypes, showerHouseTypes } from './data';
import { CheckboxOption } from 'shared/base';

export const HouseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);

  const houseTypeItemComponents = useMemo(() => {
    const houseTypeItems = houseTypes.map((houseType) => {
      return (
        <CheckboxOption
          notSelected={houseDetails.houseType !== '' && houseType.id !== houseDetails.houseType}
          selected={houseType.id === houseDetails.houseType}
          onClick={() => dispatch(setHouseType(houseType.id))}
          key={houseType.id}>
          {houseType.text}
        </CheckboxOption>
      );
    });
    return houseTypeItems;
  }, [dispatch, houseDetails.houseType]);

  const bathroomTypeItemComponents = useMemo(() => {
    const bathroomTypeItems = bathroomHouseTypes.map((bathroomType) => {
      return (
        <CheckboxOption
          notSelected={houseDetails.bathroomType !== '' && bathroomType.id !== houseDetails.bathroomType}
          selected={bathroomType.id === houseDetails.bathroomType}
          onClick={() => dispatch(setBathroomType(bathroomType.id))}
          key={bathroomType.id}>
          {bathroomType.text}
        </CheckboxOption>
      );
    });
    return bathroomTypeItems;
  }, [dispatch, houseDetails.bathroomType]);

  const showerTypeItemComponents = useMemo(() => {
    const showerTypeItems = showerHouseTypes.map((showerType) => {
      return (
        <CheckboxOption
          notSelected={houseDetails.showerType !== '' && showerType.id !== houseDetails.showerType}
          selected={showerType.id === houseDetails.showerType}
          onClick={() => dispatch(setShowerType(showerType.id))}
          key={showerType.id}>
          {showerType.text}
        </CheckboxOption>
      );
    });
    return showerTypeItems;
  }, [dispatch, houseDetails.showerType]);

  const renovationTypeItemComponents = useMemo(() => {
    const renovationTypeItems = renovationTypes.map((renovationType) => {
      return (
        <CheckboxOption
          notSelected={houseDetails.renovationType !== '' && renovationType.id !== houseDetails.renovationType}
          selected={renovationType.id === houseDetails.renovationType}
          onClick={() => dispatch(setRenovationType(renovationType.id))}
          key={renovationType.id}>
          {renovationType.text}
        </CheckboxOption>
      );
    });
    return renovationTypeItems;
  }, [dispatch, houseDetails.renovationType]);

  return (
    <>
      <DetailsRow small text="Этажность">
        <DetailsInput value={houseDetails.currentFloor} setMethod={setCurrentFloor} />
      </DetailsRow>
      <DetailsRow small text="Площадь">
        <DetailsInput placeholder="Общая, м²" value={houseDetails.totalSpace} setMethod={setTotalSpace} />
      </DetailsRow>
      <DetailsRow text="Тип дома">{houseTypeItemComponents}</DetailsRow>
      <DetailsRow text="Санузел">{bathroomTypeItemComponents}</DetailsRow>
      <DetailsRow text="Душ">{showerTypeItemComponents}</DetailsRow>
      <DetailsRow text="Ремонт">{renovationTypeItemComponents}</DetailsRow>
    </>
  );
};
