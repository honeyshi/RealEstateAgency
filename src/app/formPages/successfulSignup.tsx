import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/successfulsignup.svg';

export const SuccessfulSignup: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="Регистрация прошла успешно. На вашу электронную почту было отправлено письмо с ссылкой для подтверждения"
      header="Благодарим за регистрацию"
      image={image}
    />
  );
};
