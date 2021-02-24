import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { Button, CheckboxOption, Flexbox, Input } from 'shared/base';
import { SectionHeader } from '../sectionHeader';
import { setOwnerName, setRentDeposit, setRentPayment, setRentPaymentRules, setTelephoneNumber } from 'data/actions';
import { DetailsInput } from '../detailsInput';
import { DetailsRow } from '../detailsRow';
import { PreviousStep } from '../stepsSwitcher';

export const paymentRules = [
  { id: 'new-ad-with-deposit', opposite: 'Без залога', text: 'Есть залог' },
  { id: 'new-ad-without-deposit', opposite: 'Есть залог', text: 'Без залога' },
  { id: 'new-ad-only-rent', opposite: 'Оплата коммунальных услуг', text: 'Только стоимость аренды' },
  { id: 'new-ad-communal-payments', opposite: 'Только стоимость аренды', text: 'Оплата коммунальных услуг' },
];

export const OwnerContactsPage: React.FC = () => {
  const dispatch = useDispatch();
  const ownerContacts = useSelector((state: StoreType) => state.ownerContacts);

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
      <Input
        borderBottom
        placeholder="₽/месяц"
        value={ownerContacts.rentPayment}
        onChange={(payment) => dispatch(setRentPayment(payment))}
        onEnterPress={() => void 0}
        mb="4"
      />
      <SectionHeader>Особенности оплаты</SectionHeader>
      <Flexbox justifyContent="between">{paymentRuleComponents}</Flexbox>
      {ownerContacts.rentPaymentRules.includes('Есть залог') && (
        <Input
          borderBottom
          placeholder="Сумма залога"
          value={ownerContacts.rentDeposit}
          onChange={(payment) => dispatch(setRentDeposit(payment))}
          onEnterPress={() => void 0}
          mb="4"
        />
      )}
      <SectionHeader>Контакты</SectionHeader>
      <DetailsRow small text="Как к Вам обращаться">
        <DetailsInput placeholder="Укажем в объявлении" value={ownerContacts.ownerName} setMethod={setOwnerName} />
      </DetailsRow>
      <DetailsRow small text="Номер телефона">
        <DetailsInput
          placeholder="+7 (000) 000 - 00 - 00"
          value={ownerContacts.telephoneNumber}
          setMethod={setTelephoneNumber}
        />
      </DetailsRow>
      <Flexbox justifyContent="between">
        <PreviousStep />
        <Button fontLight text="white" bg="accent">
          Опубликовать
        </Button>
      </Flexbox>
    </>
  );
};
