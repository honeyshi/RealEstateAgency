import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption, TextField } from 'shared/base';
import { StoreType } from 'core/store';
import {
  setBathroomType,
  setCurrentFloor,
  setKitchenSpace,
  setLivingSpace,
  setRenovationType,
  setTotalFloors,
  setTotalSpace,
} from 'data/actions';
import { bathroomTypes, renovationTypes } from './data';
import { DetailsInput } from '../../detailsInput';
import { DetailsRow } from '../../detailsRow';

export const CommonDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const renovationTypeItemComponents = useMemo(() => {
    const renovationTypeItems = renovationTypes.map((renovationType) => {
      return (
        <CheckboxOption
          notSelected={flatDetails.renovationType !== '' && renovationType.id !== flatDetails.renovationType}
          selected={renovationType.id === flatDetails.renovationType}
          onClick={() => dispatch(setRenovationType(renovationType.id))}
          key={renovationType.id}>
          {renovationType.text}
        </CheckboxOption>
      );
    });
    return renovationTypeItems;
  }, [dispatch, flatDetails.renovationType]);

  const bathroomTypeItemComponents = useMemo(() => {
    const bathroomTypeItems = bathroomTypes.map((bathroomType) => {
      return (
        <CheckboxOption
          notSelected={flatDetails.bathroomType !== '' && bathroomType.id !== flatDetails.bathroomType}
          selected={bathroomType.id === flatDetails.bathroomType}
          onClick={() => dispatch(setBathroomType(bathroomType.id))}
          key={bathroomType.id}>
          {bathroomType.text}
        </CheckboxOption>
      );
    });
    return bathroomTypeItems;
  }, [dispatch, flatDetails.bathroomType]);

  return (
    <>
      <DetailsRow small text="Этаж">
        <DetailsInput value={flatDetails.currentFloor} setMethod={setCurrentFloor} />
        <TextField tag="span" mx="3">
          из
        </TextField>
        <DetailsInput value={flatDetails.totalFloors} setMethod={setTotalFloors} />
      </DetailsRow>
      <DetailsRow text="Площадь">
        <DetailsInput placeholder="Общая, м²" value={flatDetails.totalSpace} setMethod={setTotalSpace} mr="5" />
        <DetailsInput placeholder="Жилая, м²" value={flatDetails.livingSpace} setMethod={setLivingSpace} mr="5" />
        <DetailsInput placeholder="Кухня, м²" value={flatDetails.kitchenSpace} setMethod={setKitchenSpace} />
      </DetailsRow>
      <DetailsRow text="Санузел">{bathroomTypeItemComponents}</DetailsRow>
      <DetailsRow text="Ремонт">{renovationTypeItemComponents}</DetailsRow>
    </>
  );
};
