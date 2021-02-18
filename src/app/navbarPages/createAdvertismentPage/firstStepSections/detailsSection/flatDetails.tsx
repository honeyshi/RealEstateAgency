import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from 'core/store';
import { CheckboxOption, TextField } from 'shared/base';
import { DetailsRow } from './detailsRow';
import {
  setBathroomType,
  setCurrentFloor,
  setKitchenSpace,
  setLivingSpace,
  setRenovationType,
  setRoomsAmount,
  setTotalFloors,
  setTotalSpace,
} from 'data/actions';
import { DetailsInput } from './detailsInput';

const roomsAmount = [
  { id: 'one-room', circle: true, text: 1 },
  { id: 'two-rooms', circle: true, text: 2 },
  { id: 'three-rooms', circle: true, text: 3 },
  { id: 'four-rooms', circle: true, text: 4 },
  { id: 'five-rooms', circle: true, text: 5 },
  { id: 'six-rooms', circle: true, text: 6 },
  { id: 'many-rooms', circle: true, text: '7+' },
  { id: 'studio-room', circle: false, text: 'Студия' },
];

const bathroomTypes = [
  { id: 'separated-bathroom', text: 'Совмещенный' },
  { id: 'combined-bathroom', text: 'Раздельный' },
  { id: 'many-bathrooms', text: 'Более одного' },
];

const renovationTypes = [
  { id: 'cosmetic-renovation', text: 'Косметический' },
  { id: 'euro-renovation', text: 'Евро' },
  { id: 'design-renovation', text: 'Дизайнерский' },
  { id: 'no-renovation', text: 'Требуется' },
];

export const FlatDetails: React.FC = () => {
  const dispatch = useDispatch();
  const flatDetails = useSelector((state: StoreType) => state.propertyDetails);
  const checkboxItemComponents = useMemo(() => {
    const roomItems = roomsAmount.map((room) => {
      return (
        <CheckboxOption
          id={room.id}
          circle={room.circle}
          selected={room.id === flatDetails.roomsAmount}
          onClick={() => dispatch(setRoomsAmount(room.id))}
          key={room.id}>
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [dispatch, flatDetails.roomsAmount]);

  const bathroomTypeItemComponents = useMemo(() => {
    const bathroomTypeItems = bathroomTypes.map((bathroomType) => {
      return (
        <CheckboxOption
          id={bathroomType.id}
          disabled={flatDetails.bathroomType !== '' && bathroomType.id !== flatDetails.bathroomType}
          selected={bathroomType.id === flatDetails.bathroomType}
          onClick={() => dispatch(setBathroomType(bathroomType.id))}
          key={bathroomType.id}>
          {bathroomType.text}
        </CheckboxOption>
      );
    });
    return bathroomTypeItems;
  }, [dispatch, flatDetails.bathroomType]);

  const renovationTypeItemComponents = useMemo(() => {
    const renovationTypeItems = renovationTypes.map((renovationType) => {
      return (
        <CheckboxOption
          id={renovationType.id}
          disabled={flatDetails.renovationType !== '' && renovationType.id !== flatDetails.renovationType}
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
      <DetailsRow text="Количество комнат">{checkboxItemComponents}</DetailsRow>
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
