import * as yup from 'yup';

import { Button, Flexbox, Input } from 'shared/base';
import React, { useState } from 'react';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { FormPage } from 'shared/layout/formPage';
import { checkInvalidInput } from 'core/checkInvalidInput';
import { history } from 'core/history';
import image from 'icons/forgotpassword.svg';
import { parseError } from 'core/parseError';
import { performSendResetPasswordLinkRequest } from 'core/forgotPassword/sendResetPasswordLink';

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
      await performSendResetPasswordLinkRequest(email);
      history.push('/successful-send-link');
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <FormPage header="Смена пароля" helperText="Введите email для отправки нового пароля." image={image}>
      <Flexbox vertical w="75">
        <Input
          borderBottom
          formSpaces
          placeholder="Email"
          invalid={checkInvalidInput('Email', errorMessage)}
          value={email}
          onChange={(email) => setEmail(email)}
          onEnterPress={sendPassword}
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button primary onClick={sendPassword} py="3">
          Отправить пароль
        </Button>
      </Flexbox>
    </FormPage>
  );
};
