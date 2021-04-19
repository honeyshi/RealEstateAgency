import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/sendresetpasswordlink.svg';

export const SuccessfulSendLink: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="На указанный электронный адрес была отправлена ссылка для смены пароля. Перейдите по ней, чтобы установить новый пароль для своего аккаунта"
      header="Ссылка отправлена"
      image={image}
    />
  );
};
