import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CheckboxOption } from 'shared/base';
import { StoreType } from 'core/store';
import { CommonDetails } from '../detailsSection';
import { DetailsRow } from '../../detailsRow';
import { roomsAmount, roomsAmountRoomRent } from './data';
import { setRoomsAmount, setRoomsRentAmount } from 'data/actions';

export const RoomDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmount.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          disabled={Number(room.text) <= Number(flatDetails.roomsRentAmount)}
          selected={room.text === flatDetails.roomsAmount}
          onClick={() => dispatch(setRoomsAmount(room.text))}
          key={room.id}>
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [dispatch, flatDetails.roomsAmount, flatDetails.roomsRentAmount]);

  const availableRoomItemComponents = useMemo(() => {
    const availableRoomItems = roomsAmountRoomRent.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          disabled={Number(room.text) >= Number(flatDetails.roomsAmount.replace('+', ''))}
          selected={room.text === flatDetails.roomsRentAmount}
          onClick={() => dispatch(setRoomsRentAmount(room.text))}
          key={room.id}>
          {room.text}
        </CheckboxOption>
      );
    });
    return availableRoomItems;
  }, [dispatch, flatDetails.roomsAmount, flatDetails.roomsRentAmount]);

  return (
    <>
      <DetailsRow text="Количество комнат">{checkboxItemComponents}</DetailsRow>
      <DetailsRow text="Количество комнат в сделке">{availableRoomItemComponents}</DetailsRow>
      <CommonDetails />
    </>
  );
};
