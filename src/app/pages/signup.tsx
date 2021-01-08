import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Flexbox, Icon, Input, TextField } from 'shared/base';
import { parseError } from 'core/parseError';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';

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
    .min(5, 'Пароль должен иметь длину не менее 5 символов')
    .max(20, 'Пароль должен иметь длину не более 20 символов'),
  confirmPassword: yup
    .string()
    .nullable()
    .required('Повторите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не одинаковые'),
});

interface Form {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup: React.FC = () => {
  const [form, setForm] = useState<Form>({ email: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const signup = async () => {
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
        Регистрация
      </TextField>
      <TextField mb="3">Вы ещё не с нами? Зарегистрируйтесь, чтобы получить доступ к множеству объявлений.</TextField>
      <Flexbox vertical w="25">
        <Input
          borderBottom
          light
          form
          placeholder="Email"
          invalid={checkInvalidInput('Email')}
          value={form.email}
          onChange={(email) =>
            setForm({ email: email, password: form.password, confirmPassword: form.confirmPassword })
          }
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
          invalid={checkInvalidInput('Пароль')}
          value={form.password}
          onChange={(password) =>
            setForm({ email: form.email, password: password, confirmPassword: form.confirmPassword })
          }
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
          onChange={(confirmPassword) =>
            setForm({ email: form.email, password: form.password, confirmPassword: confirmPassword })
          }
          pl="0"
          pt="2"
          pb="2"
          mb="5"
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={signup} pb="3" pt="3">
          <Icon name="arrow-alt-circle-right" mr="3" />
          Продолжить
        </Button>
      </Flexbox>
      <TextField mt="5">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="text-info">
          Войти.
        </Link>
      </TextField>
    </Flexbox>
  );
};
