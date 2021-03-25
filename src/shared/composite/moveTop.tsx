import React from 'react';

import { Flexbox, RemixIcon, TextField } from 'shared/base';

import './moveTop.scss';

export const MoveTop: React.FC = () => {
  return (
    <Flexbox text="accent" className="cursor-pointer move-top" onClick={() => window.scrollTo(0, 0)}>
      <TextField tag="span" mr="3">
        Наверх
      </TextField>
      <RemixIcon name="arrow-up-s" />
    </Flexbox>
  );
};
