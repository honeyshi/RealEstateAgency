import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'shared/base';
import { propsToSpace, SpaceProps } from 'shared/base/utils/spaceUtil';

interface IDetailsInputProps extends SpaceProps {
  setMethod: (value: string) => void;
  placeholder?: string;
  value: string;
  invalid?: boolean;
}

export const DetailsInput: React.FC<IDetailsInputProps> = ({ placeholder, invalid, value, setMethod, ...other }) => {
  const dispatch = useDispatch();
  return (
    <Input
      invalid={invalid}
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
