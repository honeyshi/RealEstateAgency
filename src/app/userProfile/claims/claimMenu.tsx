import { ModalProps, Statuses, invalidModalState } from 'data/values';
import React, { useState } from 'react';

import { DefaultButton } from 'pageParts/menuButton';
import { Modal } from 'shared/base';
import classNames from 'classnames';
import { history } from 'core/history';
import { performChangeAdvertismentStatusRequest } from 'core/profile/changeAdvertismentStatus';
import { performDeleteClaimRequest } from 'core/claim/deleteClaim';

interface IClaimMenuProps {
  show: boolean;
  claimId: string;
  advertismentId: string;
}

const successModalState: ModalProps = {
  valid: true,
  show: true,
  text: 'Объявление успешно заблокировано.',
};

export const ClaimMenu: React.FC<IClaimMenuProps> = ({ claimId, advertismentId, show }) => {
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => setModalProps({ ...invalidModalState, show: false });

  const blockAdvertisment = async () => {
    try {
      await performChangeAdvertismentStatusRequest(advertismentId, String(Statuses.blocked));
      setModalProps(successModalState);
    } catch (error) {
      setModalProps(invalidModalState);
    }
  };

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
        <DefaultButton iconName="eye" onClick={() => history.push(`/advertisment-description/${advertismentId}`)}>
          Объявление
        </DefaultButton>
        <DefaultButton iconName="forbid" onClick={() => blockAdvertisment()}>
          Заблокировать
        </DefaultButton>
        <DefaultButton
          iconName="delete-bin"
          className="delete-button"
          onClick={async () => {
            try {
              await performDeleteClaimRequest(claimId);
              setModalProps({ ...successModalState, text: 'Жалоба была удалена.' });
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
