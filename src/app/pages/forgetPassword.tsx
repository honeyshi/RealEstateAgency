import React, { useState } from 'react';
import * as yup from 'yup';

import { Button, Flexbox, Input, TextField } from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
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
  const checkInvalidInput = () => {
    if (Array.isArray(errorMessage)) return errorMessage.some((message) => message.includes('Email'));
    else return errorMessage.includes('Email');
  };
  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <TextField tag="h2" mb="3">
        Смена пароля
      </TextField>
      <TextField center mb="3" pl="2" pr="2">
        Введите email для отправки нового пароля.
      </TextField>
      <Flexbox vertical className="registration-form">
        <Input
          borderBottom
          light
          form
          placeholder="Email"
          invalid={checkInvalidInput()}
          value={email}
          onChange={(email) => setEmail(email)}
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={sendPassword} pb="3" pt="3">
          Отправить пароль
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
