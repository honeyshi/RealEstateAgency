import React, { useState } from 'react';
import * as yup from 'yup';

import { Button, Flexbox, Input } from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { FormPage } from 'shared/layout/formPage';
import { parseError } from 'core/parseError';
import { checkInvalidInput } from 'core/checkInvalidInput';
import image from 'icons/resetpassword.svg';

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
    <FormPage header="Смена пароля" helperText="Установите новый пароль для своего аккаунта." image={image}>
      <Flexbox vertical w="75">
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
        <Button fontLight text="white" bg="accent" onClick={resetPassword} py="3">
          Изменить пароль
        </Button>
      </Flexbox>
    </FormPage>
  );
};
