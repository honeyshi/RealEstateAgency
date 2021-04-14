import React from 'react';
import { SuccessfulActionPage } from './successfulActionPage';
import image from 'icons/error.svg';

export const ErrorPage: React.FC = () => {
  return (
    <SuccessfulActionPage
      header="Что-то пошло не так"
      description="Произошла ошибка. Повторите попытку позже."
      image={image}
    />
  );
};
