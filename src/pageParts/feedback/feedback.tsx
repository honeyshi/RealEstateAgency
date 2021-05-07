import { Column, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';

interface IFeedbackProps {
  name: string;
  date: string;
  display: boolean;
  feedbackText: string;
}

export const Feedback: React.FC<IFeedbackProps> = ({ name, date, display, feedbackText }) => {
  return (
    <Column size={7} px="5" py="3" rounded="50" className={classNames('shadow', { 'd-none': !display })}>
      <TextField tag="h3">{name}</TextField>
      <TextField light text="black-50">
        {date}
      </TextField>
      <TextField>{feedbackText}</TextField>
    </Column>
  );
};
