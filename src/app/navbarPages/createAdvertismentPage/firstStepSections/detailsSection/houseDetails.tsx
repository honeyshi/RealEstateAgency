import { DetailsInput, DetailsRow, ErrorMessage } from 'app/navbarPages/createAdvertismentPage/base';
import React, { useMemo } from 'react';
import { setRenovationType, setRoomsAmount, setTotalFloors, setTotalSpace } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption } from 'shared/base';
import { StoreType } from 'core/store';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';
import { renovationTypes } from './data';
import { roomsAmount } from 'data/values';

export const HouseDetails: React.FC = () => {
  const dispatch = useDispatch();
  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmount.slice(0, -1).map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          selected={room.value === houseDetails.roomsAmount}
          onClick={() => dispatch(setRoomsAmount(room.value))}
          key={room.id}>
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [dispatch, houseDetails.roomsAmount]);

  const renovationTypeItemComponents = useMemo(() => {
    const renovationTypeItems = renovationTypes.map((renovationType) => {
      return (
        <CheckboxOption
          notSelected={houseDetails.renovationType !== '' && renovationType.value !== houseDetails.renovationType}
          selected={renovationType.value === houseDetails.renovationType}
          onClick={() => dispatch(setRenovationType(renovationType.value))}
          key={renovationType.id}>
          {renovationType.text}
        </CheckboxOption>
      );
    });
    return renovationTypeItems;
  }, [dispatch, houseDetails.renovationType]);

  return (
    <>
      <DetailsRow text="Количество комнат">{checkboxItemComponents}</DetailsRow>
      <DetailsRow small text="Этажность">
        <DetailsInput
          value={houseDetails.totalFloors}
          setMethod={setTotalFloors}
          invalid={checkAdvertismentField(validated, houseDetails.totalFloors)}
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
