import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from 'core/store';
import { CheckboxOption } from 'shared/base';
import { DetailsRow } from './detailsRow';
import { setRoomsAmount } from 'data/actions';
import { roomsAmountFlat } from './data';
import { CommonDetails } from './commonDetails';

export const FlatDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmountFlat.map((room) => {
      return (
        <CheckboxOption
          id={room.id}
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
      <CommonDetails />
    </>
  );
};
