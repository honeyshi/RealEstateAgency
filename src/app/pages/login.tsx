import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Flexbox, Icon, Input, TextField } from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { checkInvalidInput } from 'core/checkInvalidInput';
import { parseError } from 'core/parseError';
import { performSigninRequest } from 'core/auth/api';
import { history } from 'core/history';

const schema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .required('Email обязательное поле')
    .email('Email не соответствует формату электронной почты'),
  password: yup
    .string()
    .nullable()
    .required('Пароль обязательное поле')
    .min(6, 'Пароль должен иметь длину не менее 6 символов'),
});

interface Form {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [form, setForm] = useState<Form>({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const login = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
      await performSigninRequest(form.email, form.password);
      history.push('/');
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <Flexbox justifyContent="center" alignItems="center" vertical vh>
      <TextField tag="h2" mb="3">
        Вход
      </TextField>
      <TextField center mb="3" px="2">
        С возвращением! Войдите, чтобы получить доступ к множеству объявлений.
      </TextField>
      <Link to="/forget-password" className="text-info mb-3">
        Забыли пароль?
      </Link>
      <Flexbox vertical className="registration-form">
        <Input
          borderBottom
          formSpaces
          placeholder="Email"
          invalid={checkInvalidInput('Email', errorMessage)}
          value={form.email}
          onChange={(email) => setForm({ email: email, password: form.password })}
          onEnterPress={login}
        />
        <Input
          borderBottom
          formSpaces
          placeholder="Пароль"
          type="password"
          invalid={checkInvalidInput('Пароль', errorMessage)}
          value={form.password}
          onChange={(password) => setForm({ email: form.email, password: password })}
          onEnterPress={login}
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={login} py="3">
          <Icon name="arrow-alt-circle-right" mr="3" />
          Продолжить
        </Button>
      </Flexbox>
      <TextField center mt="5">
        Ещё нет аккаунта?{' '}
        <Link to="/signup" className="text-info">
          Зарегистрируйтесь.
        </Link>
      </TextField>
    </Flexbox>
  );
};
