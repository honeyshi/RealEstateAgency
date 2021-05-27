import { DefaultPage } from 'shared/layout/defaultPage';
import { FormPage } from 'shared/layout/formPage';
import React from 'react';
import { TextField } from 'shared/base';
import image from 'icons/aboutus.svg';

export const AboutUs: React.FC = () => {
  return (
    <DefaultPage>
      <FormPage header="Информация о компании" helperText="Всё, что вы хотели знать о нашем сервисе" image={image}>
        <TextField center tag="span" mt="3">
          Dwelly - это сервис по поиску недвижимости в долгосрочную аренду от собственников. У нас большая база
          актуальных объявлений в разных категориях, которые вы можете просматривать списком и на карте, а также большое
          количество фильтров для удобного поиска объявлений. На сайте есть ручная премодерация всех объявлений. Мы
          предлагаем несколько тарифов для подписки на сервис в разных ценовых категориях. Наш сервис поможет вам быстро
          найти жилье без обращения в агентсва недвижимости.
        </TextField>
      </FormPage>
    </DefaultPage>
  );
};
