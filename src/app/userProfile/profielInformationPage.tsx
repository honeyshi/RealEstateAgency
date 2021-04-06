import * as yup from 'yup';

import { Button, Flexbox, Input, RemixIcon, Row, TextField } from 'shared/base';
import React, { useState } from 'react';

import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { Link } from 'react-router-dom';
import { ProfileInfromationRow } from './profileInformationRow';
import { parseError } from 'core/parseError';

const schema = yup.object().shape({
  name: yup
    .string()
    .nullable()
    .required('Имя не может быть пустым')
    .max(255, 'Имя должно иметь длину не более 255 символов'),
  email: yup
    .string()
    .nullable()
    .required('Email не может быть пустым')
    .email('Email не соответствует формату электронной почты')
    .max(255, 'Email должен иметь длину не более 255 символов'),
  password: yup
    .string()
    .nullable()
    .test(
      'isMin6',
      'Пароль должен иметь длину не менее 6 символов',
      (password) => !(password !== '' && password!!.length < 6)
    )
    .test(
      'isMax20',
      'Пароль должен иметь длину не более 20 символов',
      (password) => !(password !== '' && password!!.length > 20)
    ),
  confirmPassword: yup
    .string()
    .nullable()
    .when('password', {
      is: (newPassword: string) => newPassword.length > 0,
      then: yup.string().required('Повторите пароль'),
      otherwise: yup.string(),
    })
    .oneOf([yup.ref('password'), null], 'Пароли не одинаковые'),
});

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialState: Form = {
  name: 'Екатерина',
  email: 'myemail@e.com',
  password: '',
  confirmPassword: '',
};

export const ProfileInformationPage: React.FC = () => {
  const [form, setForm] = useState<Form>(initialState);
  const [errorMessage, setErrorMessage] = useState<string | string[]>('');
  const saveChanges = async () => {
    try {
      setErrorMessage('');
      await schema.validate(form, { abortEarly: false });
    } catch (error) {
      setErrorMessage(parseError(error));
    }
  };
  return (
    <>
      <ProfileInfromationRow label="Ваше имя">
        <Input
          solid
          placeholder=""
          value={form.name}
          onChange={(name) => setForm({ ...form, name: name })}
          onEnterPress={saveChanges}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Email">
        <Input
          solid
          placeholder=""
          value={form.email}
          onChange={(email) => setForm({ ...form, email: email })}
          onEnterPress={saveChanges}
        />
        <TextField small light tag="span" text="muted">
          Электронный адрес будет изменен только после подтверждения по ссылке
        </TextField>
      </ProfileInfromationRow>
      <TextField tag="h5">Смена пароля</TextField>
      <ProfileInfromationRow label="Пароль">
        <Input
          solid
          placeholder=""
          type="password"
          value={form.password}
          onChange={(password) => setForm({ ...form, password: password })}
          onEnterPress={saveChanges}
        />
      </ProfileInfromationRow>
      <ProfileInfromationRow label="Повторите пароль">
        <Input
          solid
          placeholder=""
          type="password"
          value={form.confirmPassword}
          onChange={(confirmPassword) => setForm({ ...form, confirmPassword: confirmPassword })}
          onEnterPress={saveChanges}
        />
      </ProfileInfromationRow>
      <ErrorMessagesView messages={errorMessage} />
      <Row justifyContent="between" alignItems="center" mt="5">
        <Flexbox>
          <Button primary onClick={saveChanges}>
            Сохранить
          </Button>
          <Button
            secondary
            ml="5"
            onClick={() => {
              setErrorMessage('');
              setForm(initialState);
            }}>
            Отменить
          </Button>
        </Flexbox>
        <Flexbox>
          <Link to="/" className="text-accent">
            <Flexbox>
              <TextField tag="span" mr="3">
                Выйти
              </TextField>
              <RemixIcon name="logout-circle-r" />
            </Flexbox>
          </Link>
        </Flexbox>
      </Row>
    </>
  );
};
