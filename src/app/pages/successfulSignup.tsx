import React from 'react';

import { Button, Flexbox, TextField } from 'shared/base';
import { history } from 'core/history';

export const SuccessfulSignup: React.FC = () => {
  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <Flexbox justifyContent="center" alignItems="center" vertical w="50">
        <TextField tag="h2" mb="3">
          Благодарим за регистрацию
        </TextField>
        <TextField center mb="3" px="2">
          Регистрация прошла успешно. На вашу электронную почту было отправлено письмо с ссылкой для подтверждения
        </TextField>
        <Button fontLight text="white" bg="accent" onClick={() => history.push('/')} py="3">
          Вернуться на сайт
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
