import React from 'react';
import { SuccessfulActionPage } from './successfulActionPage';
import image from 'icons/errorunauthorized.svg';

export const UnauthorizedErrorPage: React.FC = () => {
  return (
    <SuccessfulActionPage
      auth
      header="Похоже вы не авторизованы"
      description="Для выполнения этого действия необходима авторизации. После нее вы сможете получить полный доступ к функциям сервиса."
      image={image}
    />
  );
};
