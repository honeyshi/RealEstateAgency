import {
  AreaPriceRange,
  districts,
  facilityOptions,
  invalidModalState,
  livingRules,
  propertyTypes,
  roomsAmount,
} from 'data/values';
import { Button, CheckBox, CheckboxOption, Flexbox, Modal, RemixIcon, Row } from 'shared/base';
import React, { useEffect, useMemo, useState } from 'react';
import { SubsciptionGetModel, Subscription } from 'core/subscription/subscription';

import InputRange from 'react-input-range';
import { ProfileInfromationRow } from '../profileInformationRow';
import { PropertyType } from 'pageParts/propertyType';
import { performCreateSubscriptionRequest } from 'core/subscription/createSubscription';
import { performEditSubscriptionRequest } from 'core/subscription/updateSubscription';
import { performGetOneSubscriptionRequest } from 'core/subscription/getOneSubscription';
import { useParams } from 'react-router-dom';

const initialStateForm: Subscription = {
  propertyType: '1',
  districts: [],
  rentPayment: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  rooms: [],
  space: { min: AreaPriceRange.min, max: AreaPriceRange.max },
  facilities: [],
  livingRules: [],
};

export const CreateSubscriptionPage: React.FC = () => {
  const [form, setForm] = useState<Subscription>(initialStateForm);
  const [initialState, setInitialState] = useState<Subscription>(initialStateForm);
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const { id } = useParams<{ id: string }>();

  const handleModalClose = () => {
    setModalProps({ ...invalidModalState, show: false });
  };

  const createSubscription = async () => {
    try {
      await performCreateSubscriptionRequest(form);
      setModalProps({ show: true, valid: true, text: 'Подписка успешно создана' });
    } catch (error) {
      setModalProps({ ...invalidModalState });
    }
  };

  const updateSubscription = async () => {
    try {
      await performEditSubscriptionRequest(form, id);
      setModalProps({ show: true, valid: true, text: 'Подписка успешно обновлена' });
    } catch (error) {
      setModalProps({ ...invalidModalState });
    }
  };

  useEffect(() => {
    if (id) {
      let mounted = false;
      const fetchData = async () => {
        const subscription = (await performGetOneSubscriptionRequest(id)) as SubsciptionGetModel;
        if (!mounted && subscription) {
          const subscriptionData = {
            propertyType: String(subscription.type),
            districts: JSON.parse(subscription.district) as Array<number>,
            rentPayment: {
              min: Number(String(subscription.min_price).substring(0, String(subscription.min_price).length - 3)),
              max: Number(String(subscription.max_price).substring(0, String(subscription.max_price).length - 3)),
            },
            rooms: JSON.parse(subscription.rooms) as Array<string>,
            space: {
              min: Number(subscription.min_area),
              max: Number(subscription.max_area),
            },
            facilities: JSON.parse(subscription.furniture) as Array<string>,
            livingRules: [
              subscription.only_rent === 1 ? 'filter-only-rent' : '',
              subscription.with_animals === 1 ? 'filter-with-animals' : '',
              subscription.with_kids === 1 ? 'filter-with-kids' : '',
              subscription.without_deposit === 1 ? 'filter-without-deposit' : '',
            ],
          };
          setForm(subscriptionData);
          setInitialState(subscriptionData);
        }
      };
      fetchData();
      return () => {
        mounted = true;
      };
    }
  }, [id]);

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
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
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
          <Button
            primary
            onClick={() => {
              id ? updateSubscription() : createSubscription();
            }}>
            Сохранить
          </Button>
          <Button secondary ml="5" onClick={() => setForm(initialState)}>
            Отменить
          </Button>
        </Row>
      </ProfileInfromationRow>
    </>
  );
};
