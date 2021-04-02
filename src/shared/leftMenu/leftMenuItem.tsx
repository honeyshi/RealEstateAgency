import { Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

interface ILeftMenuItem {
  active: boolean;
  header: string;
  iconName: string;
  index: number;
  setActiveMethod: (value: number) => void;
}

export const LeftMenuItem: React.FC<ILeftMenuItem> = ({ active, header, iconName, index, setActiveMethod }) => {
  const dispatch = useDispatch();
  return (
    <li
      className={classNames({ active: active }, { shadow: active }, 'left-menu-item')}
      onClick={() => dispatch(setActiveMethod(index + 1))}>
      <Flexbox pl="4">
        <RemixIcon name={iconName} />
        <TextField tag="span" pl="4">
          {header}
        </TextField>
      </Flexbox>
    </li>
  );
};
