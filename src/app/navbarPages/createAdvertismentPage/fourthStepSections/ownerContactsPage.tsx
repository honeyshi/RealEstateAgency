import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { Button, CheckboxOption, Flexbox } from 'shared/base';
import { DetailsInput, DetailsRow, ErrorMessage, SectionHeader } from '../base';
import {
  setRentDeposit,
  setRentPayment,
  setRentPaymentRules,
  setTelephoneNumber,
  setValidatedForm,
  setWrongSteps,
} from 'data/actions';
import { PreviousStep } from '../stepsSwitcher';
import { checkNewAdvertismentFields } from 'core/checkNewAdvertismentFields';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';

export const paymentRules = [
  { id: 'new-ad-with-deposit', opposite: 'Без залога', text: 'Есть залог' },
  { id: 'new-ad-without-deposit', opposite: 'Есть залог', text: 'Без залога' },
  { id: 'new-ad-only-rent', opposite: 'Оплата коммунальных услуг', text: 'Только стоимость аренды' },
  { id: 'new-ad-communal-payments', opposite: 'Только стоимость аренды', text: 'Оплата коммунальных услуг' },
];

export const OwnerContactsPage: React.FC = () => {
  const dispatch = useDispatch();
  const ownerContacts = useSelector((state: StoreType) => state.ownerContacts);
  const state = useSelector((state: StoreType) => state);

  const paymentRuleComponents = useMemo(() => {
    const paymentRuleItems = paymentRules.map((paymentRule) => {
      return (
        <CheckboxOption
          selected={ownerContacts.rentPaymentRules.includes(paymentRule.text)}
          notSelected={ownerContacts.rentPaymentRules.includes(paymentRule.opposite)}
          onClick={() => {
            const rulesItems = [...ownerContacts.rentPaymentRules];
            if (rulesItems.includes(paymentRule.text)) rulesItems.splice(rulesItems.indexOf(paymentRule.text), 1);
            else {
              rulesItems.push(paymentRule.text);
              rulesItems.indexOf(paymentRule.opposite) > -1 &&
                rulesItems.splice(rulesItems.indexOf(paymentRule.opposite), 1);
            }
            dispatch(setRentPaymentRules(rulesItems));
          }}
          key={paymentRule.id}
          mb="4">
          {paymentRule.text}
        </CheckboxOption>
      );
    });
    return paymentRuleItems;
  }, [dispatch, ownerContacts.rentPaymentRules]);
  return (
    <>
      <SectionHeader>Стоимость аренды</SectionHeader>
      <DetailsInput
        placeholder="₽/месяц"
        invalid={checkAdvertismentField(state.newAdvertisment.validated, ownerContacts.rentPayment)}
        value={ownerContacts.rentPayment}
        setMethod={setRentPayment}
      />
      <SectionHeader>Особенности оплаты</SectionHeader>
      <Flexbox justifyContent="between">{paymentRuleComponents}</Flexbox>
      <ErrorMessage validated={state.newAdvertisment.validated} fieldValue={ownerContacts.rentPaymentRules}>
        Выберите условия проживания
      </ErrorMessage>
      {ownerContacts.rentPaymentRules.includes('Есть залог') && (
        <DetailsInput
          placeholder="Сумма залога"
          invalid={checkAdvertismentField(state.newAdvertisment.validated, ownerContacts.rentDeposit)}
          value={ownerContacts.rentDeposit}
          setMethod={setRentDeposit}
        />
      )}
      <SectionHeader>Контакты</SectionHeader>
      <DetailsRow small text="Номер телефона">
        <DetailsInput
          placeholder="+7 (000) 000 - 00 - 00"
          invalid={checkAdvertismentField(state.newAdvertisment.validated, ownerContacts.telephoneNumber)}
          value={ownerContacts.telephoneNumber}
          setMethod={setTelephoneNumber}
        />
      </DetailsRow>
      <Flexbox justifyContent="between">
        <PreviousStep />
        <Button
          primary
          onClick={() => {
            dispatch(setValidatedForm(true));
            dispatch(
              setWrongSteps(
                checkNewAdvertismentFields(
                  state.newAdvertisment.propertyType,
                  state.propertyDetails,
                  state.propertyFacilities,
                  state.ownerContacts
                )
              )
            );
          }}>
          Опубликовать
        </Button>
      </Flexbox>
    </>
  );
};
