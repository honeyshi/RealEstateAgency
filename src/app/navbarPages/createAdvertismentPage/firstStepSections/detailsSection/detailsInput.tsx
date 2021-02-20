import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'shared/base';
import { propsToSpace, SpaceProps } from 'shared/base/utils/spaceUtil';

interface IDetailsInputProps extends SpaceProps {
  setMethod: (value: string) => void;
  placeholder?: string;
  value: string;
}

export const DetailsInput: React.FC<IDetailsInputProps> = ({ placeholder, value, setMethod, ...other }) => {
  const dispatch = useDispatch();
  return (
    <Input
      className={classNames(propsToSpace(other))}
      borderBottom
      placeholder={placeholder == null ? '' : placeholder}
      value={value}
      onChange={(details) => dispatch(setMethod(details))}
      onEnterPress={() => void 0}
      p="0"
    />
  );
};
