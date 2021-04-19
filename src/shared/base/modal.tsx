import { Button } from './button';
import { Flexbox } from './flexbox';
import React from 'react';
import { RemixIcon } from './remixIcon';
import { TextField } from './textField';
import classNames from 'classnames';

interface IModalProps {
  text: string;
  valid: boolean;
  show: boolean;
  handleClose: () => void;
}

export const Modal: React.FC<IModalProps> = ({ text, valid, show, handleClose }) => {
  return (
    <div className={classNames('modal', show ? 'd-block' : 'd-none')} tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-sm" role="document">
        <div className="modal-content">
          <Flexbox alignItems="center" justifyContent="end" p="3">
            <Button onClick={() => handleClose()}>
              <RemixIcon name="close" />
            </Button>
          </Flexbox>
          <Flexbox vertical alignItems="center" px="3">
            {valid ? (
              <RemixIcon name="checkbox-circle" styleType="fill" size="3x" text="accent" />
            ) : (
              <RemixIcon name="close-circle" styleType="fill" size="3x" text="danger" />
            )}
            <TextField center pt="3">{text}</TextField>
          </Flexbox>
          <Flexbox justifyContent="center" p="3">
            <Button primary px="3" onClick={() => handleClose()}>
              Закрыть
            </Button>
          </Flexbox>
        </div>
      </div>
    </div>
  );
};
