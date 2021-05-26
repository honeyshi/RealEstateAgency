import { DefaultPage } from 'shared/layout/defaultPage';
import { FormPage } from 'shared/layout/formPage';
import React from 'react';
import { TextField } from 'shared/base';
import image from 'icons/questions.svg';

export const Questions: React.FC = () => {
  return (
    <DefaultPage>
      <FormPage header="FAQ" helperText="Вопросы, которые нам часто задают" image={image}>
        <TextField bold mt="3">Что такое Dwelly?</TextField>
        <TextField>
          Это сервис по поиску недвижимости в долгосрочную аренду от собственников. Если вам нужна квартира или комната
          или даже дом в аренду — мы поможем!
        </TextField>
        <TextField bold>Откуда вы берете объявления?</TextField>
        <TextField>
          Собственники недвижимости сами размещают объявления на нашем сервисе, обязательно заполняя всю подробную
          информацию. Затем объявление проходит ручную проверку и только после этого публикуется на сайте.
        </TextField>
        <TextField bold>Как вы проверяете объявления?</TextField>
        <TextField>
          Сначала мы проверяем телефон по внутренней базе риелторов. Затем убеждаемся, что квартиру сдает именно
          собственник, задавая ряд проверочных вопросов по телефону. Если все хорошо, объявление попадает на сайт.
          <br /> При малейших подозрениях модератор запрашивает данные свидетельства о собственности на квартиру.
        </TextField>
      </FormPage>
    </DefaultPage>
  );
};
