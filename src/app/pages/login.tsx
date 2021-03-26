import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { Button, Column, Container, Flexbox, Image, Input, Row, TextField } from 'shared/base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { checkInvalidInput } from 'core/checkInvalidInput';
import { parseError } from 'core/parseError';
import { performSigninRequest } from 'core/auth/api';
import { history } from 'core/history';
import image from 'icons/authentication.svg';

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
    <Container>
      <Row>
        <Column size={5}>
          <Flexbox justifyContent="center" alignItems="center" vertical vh ml="5">
            <Image src={image} ml="5" />
          </Flexbox>
        </Column>
        <Column size={7}>
          <Flexbox justifyContent="center" alignItems="center" vertical vh>
            <TextField tag="h2" mb="3">
              Вход
            </TextField>
            <TextField center mb="3" px="2">
              С возвращением! Войдите, чтобы получить доступ к множеству объявлений.
            </TextField>
            <Link to="/forget-password" className="text-accent mb-3">
              Забыли пароль?
            </Link>
            <Flexbox vertical w="50">
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
              <Button fontLight text="white" bg="accent" onClick={login} py="3">
                Продолжить
              </Button>
            </Flexbox>
            <TextField center mt="5">
              Ещё нет аккаунта?{' '}
              <Link to="/signup" className="text-accent">
                Зарегистрируйтесь.
              </Link>
            </TextField>
          </Flexbox>
        </Column>
      </Row>
    </Container>
  );
};
