import React from 'react';
import { Column, TextField } from 'shared/base';

interface IFeedbackProps {
  name: string;
  date: string;
  feedbackText: string;
}

export const Feedback: React.FC<IFeedbackProps> = ({ name, date, feedbackText }) => {
  return (
    <Column size={7} px="5" py="3" rounded="50" className="shadow">
      <TextField tag="h2">{name}</TextField>
      <TextField light text="black-50">
        {date}
      </TextField>
      <TextField>{feedbackText}</TextField>
    </Column>
  );
};
