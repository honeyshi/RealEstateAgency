import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Flexbox, Icon, Input, TextField } from 'shared/base';
import { parseError } from 'core/parseError';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { checkInvalidInput } from 'core/checkInvalidInput';

const schema = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .required('Имя обязательное поле')
    .max(255, 'Имя должен иметь длину не более 255 символов'),
  email: yup
    .string()
    .nullable()
    .required('Email обязательное поле')
    .email('Email не соответствует формату электронной почты')
    .max(255, 'Email должен иметь длину не более 255 символов'),
  password: yup
    .string()
    .nullable()
    .required('Пароль обязательное поле')
    .min(6, 'Пароль должен иметь длину не менее 6 символов')
    .max(20, 'Пароль должен иметь длину не более 20 символов'),
  confirmPassword: yup
    .string()
    .nullable()
    .required('Повторите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не одинаковые'),
});

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup: React.FC = () => {
  const [form, setForm] = useState<Form>({ name: '', email: '', password: '', confirmPassword: '' });
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const signup = async () => {
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
        Регистрация
      </TextField>
      <TextField center mb="3" px="2">
        Вы ещё не с нами? Зарегистрируйтесь, чтобы получить доступ к множеству объявлений.
      </TextField>
      <Flexbox vertical className="registration-form">
        <Input
          borderBottom
          formSpaces
          placeholder="Имя"
          invalid={checkInvalidInput('Имя', errorMessage)}
          value={form.name}
          onChange={(name) =>
            setForm({ name: name, email: form.email, password: form.password, confirmPassword: form.confirmPassword })
          }
          onEnterPress={signup}
        />
        <Input
          borderBottom
          formSpaces
          placeholder="Email"
          invalid={checkInvalidInput('Email', errorMessage)}
          value={form.email}
          onChange={(email) =>
            setForm({ name: form.name, email: email, password: form.password, confirmPassword: form.confirmPassword })
          }
          onEnterPress={signup}
        />
        <Input
          borderBottom
          formSpaces
          placeholder="Пароль"
          type="password"
          invalid={checkInvalidInput('Пароль', errorMessage)}
          value={form.password}
          onChange={(password) =>
            setForm({ name: form.name, email: form.email, password: password, confirmPassword: form.confirmPassword })
          }
          onEnterPress={signup}
        />
        <Input
          borderBottom
          formSpaces
          placeholder="Повторите пароль"
          type="password"
          invalid={checkInvalidInput('Повторите пароль', errorMessage) || checkInvalidInput('Пароли', errorMessage)}
          value={form.confirmPassword}
          onChange={(confirmPassword) =>
            setForm({ name: form.name, email: form.email, password: form.password, confirmPassword: confirmPassword })
          }
          onEnterPress={signup}
        />
        <ErrorMessagesView messages={errorMessage} />
        <Button light onClick={signup} py="3">
          <Icon name="arrow-alt-circle-right" mr="3" />
          Продолжить
        </Button>
      </Flexbox>
      <TextField center mt="5">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="text-info">
          Войти.
        </Link>
      </TextField>
    </Flexbox>
  );
};
