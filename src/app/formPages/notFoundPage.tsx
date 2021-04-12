import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/404Error.svg';

export const NotFoundPage: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="Запрашиваемая вами страница не существует на нашем сайте."
      header="Страница не найдена"
      image={image}
    />
  );
};
