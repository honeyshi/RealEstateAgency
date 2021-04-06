import React from 'react';

import { Button, Column, Container, Flexbox, Image, TextField } from 'shared/base';
import { history } from 'core/history';
import image from 'icons/successfulsignup.svg';

export const SuccessfulSignup: React.FC = () => {
  return (
    <Container nonFluid>
      <Flexbox justifyContent="center" alignItems="center" vertical vh>
        <Column size={5}>
          <Image src={image} />
        </Column>
        <Flexbox justifyContent="center" alignItems="center" vertical w="50">
          <TextField tag="h2" mb="3">
            Благодарим за регистрацию
          </TextField>
          <TextField center mb="3" px="2">
            Регистрация прошла успешно. На вашу электронную почту было отправлено письмо с ссылкой для подтверждения
          </TextField>
          <Button primary onClick={() => history.push('/')} py="3">
            Вернуться на сайт
          </Button>
        </Flexbox>
      </Flexbox>
    </Container>
  );
};
