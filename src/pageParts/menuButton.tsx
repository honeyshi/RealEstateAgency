import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';

export const DefaultButton: React.FC<{
  iconName: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}> = ({ iconName, className, onClick, children }) => {
  return (
    <Button primary className={classNames(className)} mb="2" onClick={onClick}>
      <Flexbox>
        <RemixIcon name={iconName} mr="2" />
        <TextField tag="span">{children}</TextField>
      </Flexbox>
    </Button>
  );
};
