import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { setCurrentFloor, setRenovationType, setTotalSpace } from 'data/actions';
import { DetailsInput, DetailsRow, ErrorMessage } from 'app/navbarPages/createAdvertismentPage/base';
import { CheckboxOption } from 'shared/base';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';

import { renovationTypes } from './data';

export const HouseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

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
        <DetailsInput
          value={houseDetails.currentFloor}
          setMethod={setCurrentFloor}
          invalid={checkAdvertismentField(validated, houseDetails.currentFloor)}
        />
      </DetailsRow>
      <DetailsRow small text="Площадь">
        <DetailsInput
          placeholder="Общая, м²"
          value={houseDetails.totalSpace}
          setMethod={setTotalSpace}
          invalid={checkAdvertismentField(validated, houseDetails.totalSpace)}
        />
      </DetailsRow>
      <DetailsRow text="Ремонт">{renovationTypeItemComponents}</DetailsRow>
      <ErrorMessage column validated={validated} fieldValue={houseDetails.renovationType}>
        Выберите тип ремонта
      </ErrorMessage>
    </>
  );
};
