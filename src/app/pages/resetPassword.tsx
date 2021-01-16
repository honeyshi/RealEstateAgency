import React, { useState } from 'react';
import * as yup from 'yup';

import { Button, Flexbox, Input, TextField } from 'shared/base';
import { parseError } from 'core/parseError';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';

const schema = yup.object().shape({
  password: yup
    .string()
    .nullable()
    .required('Пароль обязательное поле')
    .min(5, 'Пароль должен иметь длину не менее 5 символов')
    .max(20, 'Пароль должен иметь длину не более 20 символов'),
  confirmPassword: yup
    .string()
    .nullable()
    .required('Повторите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не одинаковые'),
});

interface Form {
  password: string;
  confirmPassword: string;
}

export const ResetPassword: React.FC = () => {
  const [form, setForm] = useState<Form>({ password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const resetPassword = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  const checkInvalidInput = (label: string): boolean => {
    if (Array.isArray(errorMessage)) return errorMessage.some((message) => message.includes(label));
    else return errorMessage.includes(label);
  };

  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <TextField tag="h2" mb="3">
        Смена пароля
      </TextField>
      <TextField center mb="3" pl="2" pr="2">
        Установите новый пароль для своего аккаунта.
      </TextField>
      <Flexbox vertical className="registration-form">
        <Input
          form
          borderBottom
          light
          placeholder="Пароль"
          type="password"
          invalid={checkInvalidInput('Пароль')}
          value={form.password}
          onChange={(password) => setForm({ password: password, confirmPassword: form.confirmPassword })}
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <Input
          form
          borderBottom
          light
          placeholder="Повторите пароль"
          type="password"
          invalid={checkInvalidInput('Повторите пароль')}
          value={form.confirmPassword}
          onChange={(confirmPassword) => setForm({ password: form.password, confirmPassword: confirmPassword })}
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={resetPassword} pb="3" pt="3">
          Изменить пароль
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
