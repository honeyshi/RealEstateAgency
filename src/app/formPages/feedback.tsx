import { DefaultPage } from 'shared/layout/defaultPage';
import { FeedbackSwitch } from 'pageParts/feedback';
import { FormPage } from 'shared/layout/formPage';
import React from 'react';
import image from 'icons/feedback.svg';

export const Feedback: React.FC = () => {
  return (
    <DefaultPage>
      <FormPage header="Отзывы" helperText="Множество довольных клиентов пишут о нас" image={image}>
        <FeedbackSwitch big />
      </FormPage>
    </DefaultPage>
  );
};
