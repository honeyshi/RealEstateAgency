import { AreaPriceRange, districts, facilityOptions, livingRules, propertyTypes, roomsAmount } from 'data/values';
import { Button, CheckBox, CheckboxOption, Flexbox, RemixIcon, Row } from 'shared/base';
import InputRange, { Range } from 'react-input-range';
import React, { useMemo, useState } from 'react';

import { ProfileInfromationRow } from './profileInformationRow';
import { PropertyType } from 'pageParts/propertyType';

interface Subscription {
  propertyType: string;
  districts: number[];
  rentPayment: Range | number;
  rooms: string[];
  space: Range | number;
  facilities: string[];
  livingRules: string[];
}

const initialState: Subscription = {
  propertyType: '1',
  districts: [],
  rentPayment: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  rooms: [],
  space: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  facilities: [],
  livingRules: [],
};

export const CreateSubscriptionPage: React.FC = () => {
  const [form, setForm] = useState<Subscription>(initialState);

  const propertyTypeItemComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.text}
          active={propertyType.value === form.propertyType}
          onClick={() => setForm({ ...form, propertyType: propertyType.value })}
          key={propertyType.id}>
          <RemixIcon name={propertyType.iconName} />
        </PropertyType>
      );
    });
    return propertyTypeItems;
  }, [form]);

  const districtItemComponents = useMemo(() => {
    const districtItems = districts.map((district) => {
      return (
        <CheckBox
          name={district}
          value={form.districts.includes(districts.indexOf(district))}
          onChange={(value) =>
            value
              ? setForm({ ...form, districts: form.districts.concat(districts.indexOf(district)) })
              : setForm({
                  ...form,
                  districts: form.districts.filter((selectedDistrict) => {
                    return selectedDistrict !== districts.indexOf(district);
                  }),
                })
          }
          key={district}>
          {district}
        </CheckBox>
      );
    });
    return districtItems;
  }, [form]);

  const roomItemComponents = useMemo(() => {
    const roomItems = roomsAmount.map((room) => {
      return (
        <CheckboxOption
          circle={room.circle}
          selected={form.rooms.includes(room.value)}
          onClick={() =>
            form.rooms.includes(room.value)
              ? setForm({
                  ...form,
                  rooms: form.rooms.filter((selectedRoom) => {
                    return selectedRoom !== room.value;
                  }),
                })
              : setForm({
                  ...form,
                  rooms: form.rooms.concat(room.value),
                })
          }
          key={room.id}
          mr="2"
          mb="3">
          {room.text}
        </CheckboxOption>
      );
    });
    return roomItems;
  }, [form]);

  const facilitiesItemComponents = useMemo(() => {
    const facilityItems = facilityOptions.map((facility) => {
      return (
        <CheckBox
          name={facility.id}
          value={form.facilities.includes(facility.value)}
          onChange={(value) =>
            value
              ? setForm({ ...form, facilities: form.facilities.concat(facility.value) })
              : setForm({
                  ...form,
                  facilities: form.facilities.filter((selectedFacility) => {
                    return selectedFacility !== facility.value;
                  }),
                })
          }
          key={facility.id}>
          {facility.text}
        </CheckBox>
      );
    });
    return facilityItems;
  }, [form]);

  const livingRulesItemComponents = useMemo(() => {
    const livingRulesItems = livingRules.map((livingRule) => {
      return (
        <CheckBox
          name={livingRule.id}
          value={form.livingRules.includes(livingRule.id)}
          onChange={(value) =>
            value
              ? setForm({ ...form, livingRules: form.livingRules.concat(livingRule.id) })
              : setForm({
                  ...form,
                  livingRules: form.livingRules.filter((selectedLivingRule) => {
                    return selectedLivingRule !== livingRule.id;
                  }),
                })
          }
          key={livingRule.id}>
          {livingRule.text}
        </CheckBox>
      );
    });
    return livingRulesItems;
  }, [form]);

  return (
    <>
      <Row justifyContent="center" mt="5" mb="4" w="100">
        <Flexbox justifyContent="between" w="50">
          {propertyTypeItemComponents}
        </Flexbox>
      </Row>
      <ProfileInfromationRow label="Район">{districtItemComponents}</ProfileInfromationRow>
      <ProfileInfromationRow label="Стоимость аренды">
        <InputRange
          formatLabel={(value) => `${value} тыс. руб.`}
          maxValue={AreaPriceRange.max}
          minValue={AreaPriceRange.min}
          value={form.rentPayment}
          step={5}
          onChange={(value) => setForm({ ...form, rentPayment: value })}
        />
      </ProfileInfromationRow>
      {form.propertyType !== '2' && ( // room doesn't have rooms amount and house can not be studio
        <ProfileInfromationRow label="Количество комнат">
          <Flexbox justifyContent="between">
            {form.propertyType === '0' ? roomItemComponents.slice(0, -1) : roomItemComponents}
          </Flexbox>
        </ProfileInfromationRow>
      )}
      <ProfileInfromationRow label="Площадь">
        <InputRange
          formatLabel={(value) => `${value} м²`}
          maxValue={AreaPriceRange.max}
          minValue={AreaPriceRange.min}
          value={form.space}
          step={5}
          onChange={(value) => setForm({ ...form, space: value })}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Удобства">{facilitiesItemComponents}</ProfileInfromationRow>
      <ProfileInfromationRow label="Условия проживания">{livingRulesItemComponents}</ProfileInfromationRow>
      <ProfileInfromationRow label="">
        <Row alignItems="center">
          <Button primary>Сохранить</Button>
          <Button secondary ml="5" onClick={() => setForm(initialState)}>
            Отменить
          </Button>
        </Row>
      </ProfileInfromationRow>
    </>
  );
};
