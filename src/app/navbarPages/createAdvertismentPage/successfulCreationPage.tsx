import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/publishad.svg';

export const SuccessfulCreationPage: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="Это займет некоторое время. После окончания проверки, если объявление соответствует правилам сервиса,
      оно будет опубликовано"
      header="Ваше объявление было отправлено на проверку"
      image={image}
    />
  );
};
