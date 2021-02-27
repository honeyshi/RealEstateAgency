import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { CheckboxOption } from 'shared/base';
import { CommonDetails } from '../detailsSection';
import { DetailsRow } from '../../detailsRow';
import { setRoomsAmount } from 'data/actions';
import { roomsAmountFlat } from './data';
import { ErrorMessage } from '../../errorMessage';

export const FlatDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmountFlat.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          selected={room.text === flatDetails.roomsAmount}
          onClick={() => dispatch(setRoomsAmount(room.text))}
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
