import { Button, CheckboxOption, Flexbox } from 'shared/base';
import { DetailsInput, DetailsRow, ErrorMessage, SectionHeader } from '../base';
import React, { useMemo, useState } from 'react';
import {
  setRentDeposit,
  setRentPayment,
  setRentPaymentRule,
  setTelephoneNumber,
  setValidatedForm,
  setWithDeposit,
  setWrongSteps,
} from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { PreviousStep } from '../stepsSwitcher';
import { StoreType } from 'core/store';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';
import { checkNewAdvertismentFields } from 'core/checkNewAdvertismentFields';
import { history } from 'core/history';
import { parseError } from 'core/parseError';
import { performPublishAdvertismentRequest } from 'core/createAdvertisment/publishAdvertisment';

export const paymentRules = [
  { id: 'new-ad-only-rent', text: 'Только стоимость аренды', value: '0' },
  { id: 'new-ad-counters', text: 'Оплата счетчиков', value: '1' },
  {
    id: 'new-ad-communal-payments',
    text: 'Оплата коммунальных услуг',
    value: '2',
  },
];

export const OwnerContactsPage: React.FC = () => {
  const dispatch = useDispatch();

  const ownerContacts = useSelector((state: StoreType) => state.ownerContacts);
  const state = useSelector((state: StoreType) => state);

  const [errorMessage, setErrorMessage] = useState<string | string[]>('');

  const publishAdvertisment = async () => {
    dispatch(setValidatedForm(true));
    const wrongSteps = checkNewAdvertismentFields(
      state.newAdvertisment.propertyType,
      state.propertyDetails,
      state.propertyFacilities,
      state.propertyPhotos.photos,
      state.ownerContacts
    );
    dispatch(setWrongSteps(wrongSteps));
    try {
      if (!(wrongSteps.length > 0)) {
        const result = await performPublishAdvertismentRequest(
          state.newAdvertisment.propertyType,
          state.propertyDetails,
          state.propertyFacilities,
          state.propertyPhotos,
          state.ownerContacts
        );
        result === 'success' && history.push('/successful-advertisment-publishing');
      }
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };

  const paymentRuleComponents = useMemo(() => {
    const paymentRuleItems = paymentRules.map((paymentRule) => {
      return (
        <CheckboxOption
          selected={ownerContacts.rentPaymentRule === paymentRule.value}
          notSelected={ownerContacts.rentPaymentRule !== '' && ownerContacts.rentPaymentRule !== paymentRule.value}
          onClick={() => dispatch(setRentPaymentRule(paymentRule.value))}
          key={paymentRule.id}
          mb="4">
          {paymentRule.text}
        </CheckboxOption>
      );
    });
    return paymentRuleItems;
  }, [dispatch, ownerContacts.rentPaymentRule]);
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
      <Flexbox justifyContent="between">
        <CheckboxOption
          selected={ownerContacts.withDeposit}
          onClick={() => dispatch(setWithDeposit(!ownerContacts.withDeposit))}
          mb="4">
          Есть залог
        </CheckboxOption>
        {paymentRuleComponents}
      </Flexbox>
      <ErrorMessage validated={state.newAdvertisment.validated} fieldValue={ownerContacts.rentPaymentRule}>
        Выберите условия проживания
      </ErrorMessage>
      {ownerContacts.withDeposit && (
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
        <Button primary onClick={() => publishAdvertisment()}>
          Опубликовать
        </Button>
      </Flexbox>
      <Flexbox justifyContent="end" mt="4">
        <ErrorMessagesView messages={errorMessage} />
      </Flexbox>
    </>
  );
};
