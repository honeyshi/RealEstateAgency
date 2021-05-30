import React from 'react';
import { SuccessfulActionPage } from 'shared/layout/successfulActionPage';
import image from 'icons/emailconfirm.svg';

export const EmailConfirm: React.FC = () => {
  return (
    <SuccessfulActionPage
      description="Ваш адрес электронной почты был успешно подтвержден"
      header="Благодарим за подтверждение"
      image={image}
    />
  );
};
