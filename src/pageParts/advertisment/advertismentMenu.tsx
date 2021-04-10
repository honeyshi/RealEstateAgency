import './advertismentMenu.scss';

import { Button, Flexbox, Modal, RemixIcon, TextField } from 'shared/base';
import React, { useState } from 'react';

import { Statuses } from 'data/values';
import classNames from 'classnames';

interface IAdvertismentMenuProps {
  admin?: boolean;
  status?: number;
  show: boolean;
}

const DefaultButton: React.FC<{ iconName: string; className?: string; onClick?: (e: React.MouseEvent) => void }> = ({
  iconName,
  className,
  onClick,
  children,
}) => {
  return (
    <Button primary className={classNames(className)} mb="2" onClick={onClick}>
      <Flexbox>
        <RemixIcon name={iconName} mr="2" />
        <TextField tag="span">{children}</TextField>
      </Flexbox>
    </Button>
  );
};

const DeclineButton: React.FC = () => {
  return <DefaultButton iconName="close">Отклонить</DefaultButton>;
};

const BlockButton: React.FC = () => {
  return <DefaultButton iconName="forbid">Заблокировать</DefaultButton>;
};

const PublishButton: React.FC = () => {
  return <DefaultButton iconName="task">Опубликовать</DefaultButton>;
};

interface ModalProps {
  valid: boolean;
  show: boolean;
  text: string;
}

const initialModalState: ModalProps = {
  valid: false,
  show: false,
  text: 'Что-то пошло не так. Повторите попытку позже.',
};

export const AdvertismentMenu: React.FC<IAdvertismentMenuProps> = ({ admin, status, show }) => {
  const [modalProps, setModalProps] = useState(initialModalState);

  const handleModalClose = () => {
    setModalProps(initialModalState);
  };

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
        <DefaultButton iconName="edit">Редактировать</DefaultButton>
        {admin && status === Statuses.moderation && (
          <>
            <PublishButton /> <DeclineButton />
          </>
        )}
        {admin && status === Statuses.unpublished && <PublishButton />}
        {admin && status === Statuses.published && <BlockButton />}
        {admin && status === Statuses.blocked && <PublishButton />}
        {admin && status === Statuses.declined && <PublishButton />}
        <DefaultButton
          iconName="delete-bin"
          className="delete-button"
          onClick={() => setModalProps({ valid: true, text: 'text', show: true })}>
          Удалить
        </DefaultButton>
      </div>
    </>
  );
};
