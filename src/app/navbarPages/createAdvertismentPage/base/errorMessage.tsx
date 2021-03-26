import React from 'react';
import classNames from 'classnames';

import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';
import { TextField } from 'shared/base';
import { DetailsRow } from './detailsRow';

interface IErrorMessageProps {
  column?: boolean;
  validated: boolean;
  fieldValue: string | string[];
}

export const ErrorMessage: React.FC<IErrorMessageProps> = ({ column, validated, fieldValue, children }) => {
  return column ? (
    <DetailsRow invisible={!checkAdvertismentField(validated, fieldValue)}>
      <TextField text="danger" tag="span">
        {children}
      </TextField>
    </DetailsRow>
  ) : (
    <TextField
      text="danger"
      tag="span"
      classes={classNames({ 'd-none': !checkAdvertismentField(validated, fieldValue) })}>
      {children}
    </TextField>
  );
};
