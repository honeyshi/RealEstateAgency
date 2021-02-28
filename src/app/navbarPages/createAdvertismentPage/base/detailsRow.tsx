import classNames from 'classnames';
import React from 'react';
import { Column, Flexbox, Row } from 'shared/base';

interface IDetailsRowProps {
  text?: string;
  small?: boolean;
  invisible?: boolean;
}

export const DetailsRow: React.FC<IDetailsRowProps> = ({ text, small, invisible, children }) => {
  return (
    <Row mb="4" className={classNames({ 'd-none': invisible })}>
      <Flexbox alignItems="end" w="100">
        <Column size={3}>{text}</Column>
        <Flexbox
          alignItems="end"
          justifyContent="between"
          className={classNames({ 'col-md-8': !small }, { 'col-md-3': small })}>
          {children}
        </Flexbox>
      </Flexbox>
    </Row>
  );
};
