import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/403Error.svg';

export const AccessDeniedPage: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="Завершите регистрацию и вы сможете получить полный доступ к функциям сервиса"
      header="Электронный адрес не подтвержден"
      image={image}
    />
  );
};
