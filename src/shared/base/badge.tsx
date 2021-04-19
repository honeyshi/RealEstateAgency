import './badge.scss';

import { Flexbox, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';

export const Badge: React.FC<{ danger?: boolean }> = ({ danger, children }) => {
  return (
    <Flexbox vertical alignItems="center" className="badge-container">
      <TextField uppercase tag="span" p="2" classes={classNames('badge', { danger: danger })}>
        {children}
      </TextField>
    </Flexbox>
  );
};
