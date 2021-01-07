import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Flexbox, Icon, Input, TextField } from 'shared/base';
import { parseError } from 'core/parseError';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';

const schema = yup.object().shape({
  email: yup.string().nullable().required().email().label('Email'),
  password: yup.string().nullable().required().min(5).max(20).label('Password'),
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
        Вход
      </TextField>
      <TextField mb="3">С возвращением! Войдите, чтобы получить доступ к множеству объявлений.</TextField>
      <Link to="/reset-password" className="text-info mb-3">
        Забыли пароль?
      </Link>
      <Flexbox vertical w="25">
        <Input
          borderBottom
          light
          form
          placeholder="Email"
          invalid={checkInvalidInput('Email')}
          value={form.email}
          onChange={(email) => setForm({ email: email, password: form.password })}
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <Input
          form
          borderBottom
          light
          placeholder="Пароль"
          type="password"
          invalid={checkInvalidInput('Password')}
          value={form.password}
          onChange={(password) => setForm({ email: form.email, password: password })}
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={login} pb="3" pt="3">
          <Icon name="arrow-alt-circle-right" mr="3" />
          Продолжить
        </Button>
      </Flexbox>
      <TextField mt="5">
        Ещё нет аккаунта?{' '}
        <Link to="/signup" className="text-info">
          Зарегистрируйтесь.
        </Link>
      </TextField>
    </Flexbox>
  );
};
