import './advertismentMenu.scss';

import { Button, Flexbox, Modal, RemixIcon, TextField } from 'shared/base';
import { ModalProps, Statuses, invalidModalState } from 'data/values';
import React, { useState } from 'react';

import classNames from 'classnames';
import { history } from 'core/history';
import { performChangeAdvertismentStatusRequest } from 'core/profile/changeAdvertismentStatus';
import { performDeleteAdvertismentRequest } from 'core/profile/deleteAdvertisment';

interface IAdvertismentMenuProps {
  admin?: boolean;
  status?: number;
  show: boolean;
  id: string;
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

const DeclineButton: React.FC<{ onClick: (e: React.MouseEvent) => void }> = ({ onClick }) => {
  return (
    <DefaultButton iconName="close" onClick={onClick}>
      Отклонить
    </DefaultButton>
  );
};

const BlockButton: React.FC<{ onClick: (e: React.MouseEvent) => void }> = ({ onClick }) => {
  return (
    <DefaultButton iconName="forbid" onClick={onClick}>
      Заблокировать
    </DefaultButton>
  );
};

const PublishButton: React.FC<{ onClick: (e: React.MouseEvent) => void }> = ({ onClick }) => {
  return (
    <DefaultButton iconName="task" onClick={onClick}>
      Опубликовать
    </DefaultButton>
  );
};

const UnpublishButton: React.FC<{ onClick: (e: React.MouseEvent) => void }> = ({ onClick }) => {
  return (
    <DefaultButton iconName="eye-close" onClick={onClick}>
      Скрыть
    </DefaultButton>
  );
};

const successModalState: ModalProps = {
  valid: true,
  show: true,
  text: 'Статус объявления успешно изменен.',
};

export const AdvertismentMenu: React.FC<IAdvertismentMenuProps> = ({ admin, status, show, id }) => {
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => setModalProps({ ...invalidModalState, show: false });

  const setAdvertismentStatus = async (status: number) => {
    try {
      await performChangeAdvertismentStatusRequest(id, String(status));
      setModalProps(successModalState);
    } catch (error) {
      setModalProps(invalidModalState);
    }
  };

  const publishAdvertisment = () => setAdvertismentStatus(Statuses.published);
  const declineAdvertisment = () => setAdvertismentStatus(Statuses.declined);
  const blockAdvertisment = () => setAdvertismentStatus(Statuses.blocked);
  const hideAdvertisment = () => setAdvertismentStatus(Statuses.unpublished);

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
        <DefaultButton iconName="edit" onClick={() => history.push(`/profile/advertisment/${id}/edit`)}>
          Редактировать
        </DefaultButton>
        {admin && status === Statuses.moderation && (
          <>
            <PublishButton onClick={() => publishAdvertisment()} />
            <DeclineButton onClick={() => declineAdvertisment()} />
          </>
        )}
        {admin && status === Statuses.unpublished && <PublishButton onClick={() => publishAdvertisment()} />}
        {status === Statuses.published && (
          <>
            <UnpublishButton onClick={() => hideAdvertisment()} />
            {admin && <BlockButton onClick={() => blockAdvertisment()} />}
          </>
        )}
        {admin && status === Statuses.blocked && <PublishButton onClick={() => publishAdvertisment()} />}
        {admin && status === Statuses.declined && <PublishButton onClick={() => publishAdvertisment()} />}
        <DefaultButton
          iconName="delete-bin"
          className="delete-button"
          onClick={async () => {
            try {
              await performDeleteAdvertismentRequest(id);
              setModalProps({ ...successModalState, text: 'Объявление было удалено.' });
            } catch (error) {
              setModalProps(invalidModalState);
            }
          }}>
          Удалить
        </DefaultButton>
      </div>
    </>
  );
};
