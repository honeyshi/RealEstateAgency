import { Flexbox, RemixIcon, TextField } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';
import classNames from 'classnames';

interface ILeftMenuItem {
  to: string;
  active: boolean;
  header: string;
  iconName: string;
}

export const LeftMenuItemLink: React.FC<ILeftMenuItem> = ({ to, active, header, iconName }) => {
  return (
    <Link to={to}>
      <li className={classNames({ active: active }, { shadow: active }, 'left-menu-item')}>
        <Flexbox pl="4">
          <RemixIcon name={iconName} />
          <TextField tag="span" pl="4">
            {header}
          </TextField>
        </Flexbox>
      </li>
    </Link>
  );
};
