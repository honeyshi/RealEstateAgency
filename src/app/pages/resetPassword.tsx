import React, { useState } from 'react';
import * as yup from 'yup';

import { Button, Flexbox, Input, TextField } from 'shared/base';
import { parseError } from 'core/parseError';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { checkInvalidInput } from 'core/checkInvalidInput';

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

  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <TextField tag="h2" mb="3">
        Смена пароля
      </TextField>
      <TextField center mb="3" px="2">
        Установите новый пароль для своего аккаунта.
      </TextField>
      <Flexbox vertical className="registration-form">
        <Input
          borderBottom
          formSpaces
          placeholder="Пароль"
          type="password"
          invalid={checkInvalidInput('Пароль', errorMessage)}
          value={form.password}
          onChange={(password) => setForm({ password: password, confirmPassword: form.confirmPassword })}
          onEnterPress={resetPassword}
        />
        <Input
          borderBottom
          formSpaces
          placeholder="Повторите пароль"
          type="password"
          invalid={checkInvalidInput('Повторите пароль', errorMessage)}
          value={form.confirmPassword}
          onChange={(confirmPassword) => setForm({ password: form.password, confirmPassword: confirmPassword })}
          onEnterPress={resetPassword}
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={resetPassword} py="3">
          Изменить пароль
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
