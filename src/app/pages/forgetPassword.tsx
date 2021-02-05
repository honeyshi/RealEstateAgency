import React, { useState } from 'react';
import * as yup from 'yup';

import { Button, Flexbox, Input, TextField } from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { checkInvalidInput } from 'core/checkInvalidInput';
import { parseError } from 'core/parseError';

const schema = yup
  .string()
  .nullable()
  .required('Email обязательное поле')
  .email('Email не соответствует формату электронной почты');

export const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const sendPassword = async () => {
    try {
      setErrorMessage('');
      await schema.validate(email, { abortEarly: false });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <TextField tag="h2" mb="3">
        Смена пароля
      </TextField>
      <TextField center mb="3" px="2">
        Введите email для отправки нового пароля.
      </TextField>
      <Flexbox vertical className="registration-form">
        <Input
          borderBottom
          light
          form
          placeholder="Email"
          invalid={checkInvalidInput('Email', errorMessage)}
          value={email}
          onChange={(email) => setEmail(email)}
          onEnterPress={sendPassword}
          pl="0"
          py="2"
          mb="5"
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={sendPassword} py="3">
          Отправить пароль
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
