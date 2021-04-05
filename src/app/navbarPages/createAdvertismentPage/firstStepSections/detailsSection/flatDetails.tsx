import { DetailsRow, ErrorMessage } from '../../base';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption } from 'shared/base';
import { CommonDetails } from '../detailsSection';
import { StoreType } from 'core/store';
import { roomsAmount } from './data';
import { setRoomsAmount } from 'data/actions';

export const FlatDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmount.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          selected={room.value === flatDetails.roomsAmount}
          onClick={() => dispatch(setRoomsAmount(room.value))}
          key={room.id}>
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [dispatch, flatDetails.roomsAmount]);

  return (
    <>
      <DetailsRow text="Количество комнат">{checkboxItemComponents}</DetailsRow>
      <ErrorMessage column validated={validated} fieldValue={flatDetails.roomsAmount}>
        Выберите количество комнат
      </ErrorMessage>
      <CommonDetails />
    </>
  );
};
