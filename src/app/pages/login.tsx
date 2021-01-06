import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Flexbox, Icon, Input, TextField } from 'shared/base';

export const Login: React.FC = () => {
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
        <Input placeholder="Email" borderBottom light pt="2" pb="2" mb="5" />
        <Input placeholder="Пароль" type="password" borderBottom light pt="2" pb="2" mb="5" />
        <Button light pb="3" pt="3">
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
