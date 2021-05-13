import { Flexbox, RemixIcon, TextField } from 'shared/base';

import { DateTime } from 'luxon';
import React from 'react';

interface IPricingItemProps {
  type: string;
  iconName: string;
  validity: string;
  price: string;
  creation: string;
  expiration: string;
}

export const PricingItem: React.FC<IPricingItemProps> = ({ type, iconName, validity, price, creation, expiration }) => {
  return (
    <Flexbox vertical rounded="50" className="shadow" py="4" px="5" mb="5">
      <Flexbox text="accent" justifyContent="center" alignItems="baseline">
        <RemixIcon styleType="fill" size="lg" name={iconName} mr="3" />
        <TextField uppercase tag="h4">
          {type}
        </TextField>
      </Flexbox>
      <TextField>
        Срок действия: {validity} {type === 'Базовый' ? 'дня' : 'дней'}
      </TextField>
      <TextField>Стоимость: {price} ₽</TextField>
      <TextField>
        Дата приобретения: {DateTime.fromSQL(creation).setLocale('ru').toLocaleString(DateTime.DATE_FULL)}
      </TextField>
      <TextField>
        Дата окончания: {DateTime.fromSQL(expiration).setLocale('ru').toLocaleString(DateTime.DATE_FULL)}
      </TextField>
    </Flexbox>
  );
};
