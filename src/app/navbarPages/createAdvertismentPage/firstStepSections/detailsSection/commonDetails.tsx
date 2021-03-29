import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption, TextField } from 'shared/base';
import { StoreType } from 'core/store';
import { setCurrentFloor, setRenovationType, setTotalFloors, setTotalSpace } from 'data/actions';
import { renovationTypes } from './data';
import { DetailsInput, DetailsRow, ErrorMessage } from '../../base';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';

export const CommonDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

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

  return (
    <>
      <DetailsRow small text="Этаж">
        <DetailsInput
          value={flatDetails.currentFloor}
          setMethod={setCurrentFloor}
          invalid={checkAdvertismentField(validated, flatDetails.currentFloor)}
        />
        <TextField tag="span" mx="3">
          из
        </TextField>
        <DetailsInput
          value={flatDetails.totalFloors}
          setMethod={setTotalFloors}
          invalid={checkAdvertismentField(validated, flatDetails.totalFloors)}
        />
      </DetailsRow>
      <DetailsRow small text="Площадь">
        <DetailsInput
          placeholder="Общая, м²"
          value={flatDetails.totalSpace}
          setMethod={setTotalSpace}
          invalid={checkAdvertismentField(validated, flatDetails.totalSpace)}
          mr="5"
        />
      </DetailsRow>
      <DetailsRow text="Ремонт">{renovationTypeItemComponents}</DetailsRow>
      <ErrorMessage column validated={validated} fieldValue={flatDetails.renovationType}>
        Выберите тип ремонта
      </ErrorMessage>
    </>
  );
};
