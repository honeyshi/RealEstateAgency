import { ModalProps, invalidModalState } from 'data/values';
import React, { useState } from 'react';

import { DefaultButton } from 'pageParts/menuButton';
import { Modal } from 'shared/base';
import classNames from 'classnames';
import { history } from 'core/history';
import { performUnsubscribeRequest } from 'core/subscription/unsubscribe';

interface ISubscriptionMenuProps {
  show: boolean;
  subscriptionId: string;
}

const successModalState: ModalProps = {
  valid: true,
  show: true,
  text: 'Подписка отменена.',
};

export const SubscriptionMenu: React.FC<ISubscriptionMenuProps> = ({ subscriptionId, show }) => {
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => setModalProps({ ...invalidModalState, show: false });

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
        <DefaultButton iconName="edit" onClick={() => history.push(`/profile/edit-subscription/${subscriptionId}`)}>
          Редактировать
        </DefaultButton>
        <DefaultButton
          iconName="delete-bin"
          className="delete-button"
          onClick={async () => {
            try {
              await performUnsubscribeRequest(subscriptionId);
              setModalProps(successModalState);
            } catch (error) {
              setModalProps(invalidModalState);
            }
          }}>
          Отменить
        </DefaultButton>
      </div>
    </>
  );
};
