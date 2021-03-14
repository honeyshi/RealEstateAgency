import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { setCurrentFloor, setHouseType, setRenovationType, setTotalSpace } from 'data/actions';
import { DetailsInput, DetailsRow, ErrorMessage } from '../../base';
import { houseTypes, renovationTypes } from './data';
import { CheckboxOption } from 'shared/base';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';

export const HouseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

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
      <DetailsRow text="Тип дома">{houseTypeItemComponents}</DetailsRow>
      <ErrorMessage column validated={validated} fieldValue={houseDetails.houseType}>
        Выберите тип дома
      </ErrorMessage>
      <DetailsRow text="Ремонт">{renovationTypeItemComponents}</DetailsRow>
      <ErrorMessage column validated={validated} fieldValue={houseDetails.renovationType}>
        Выберите тип ремонта
      </ErrorMessage>
    </>
  );
};
