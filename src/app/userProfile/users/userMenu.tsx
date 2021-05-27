import React, { useState } from 'react';
import { UserRoles, invalidModalState } from 'data/values';

import { DefaultButton } from 'pageParts/menuButton';
import { Modal } from 'shared/base';
import classNames from 'classnames';
import { performDeleteUserRequest } from 'core/users/deleteUser';
import { performUpdateUserRoleRequest } from 'core/users/setUserRole';

interface IUserMenuProps {
  userId: string;
  userRole: string;
  ownRole: string;
  show: boolean;
}

export const UserMenu: React.FC<IUserMenuProps> = ({ userId, userRole, ownRole, show }) => {
  const [modalProps, setModalProps] = useState({ ...invalidModalState, show: false });

  const handleModalClose = () => setModalProps({ ...invalidModalState, show: false });

  const updateUserRole = async (role: string, id: string) => {
    try {
      await performUpdateUserRoleRequest(role, id);
      setModalProps({ valid: true, show: true, text: 'Роль пользователя успешно изменена' });
    } catch (error) {
      setModalProps(invalidModalState);
    }
  };

  return (
    <>
      <Modal valid={modalProps.valid} text={modalProps.text} show={modalProps.show} handleClose={handleModalClose} />
      <div className={classNames('p-2 advertisment-menu shadow', show ? 'd-flex flex-column' : 'd-none')}>
        {userRole !== UserRoles.Admin && ownRole === UserRoles.Admin && (
          <DefaultButton iconName="admin" onClick={() => updateUserRole(UserRoles.Admin, userId)}>
            Админ
          </DefaultButton>
        )}
        {userRole === UserRoles.User && ownRole === UserRoles.Admin && (
          <DefaultButton iconName="user-2" onClick={() => updateUserRole(UserRoles.Manager, userId)}>
            Менеджер
          </DefaultButton>
        )}
        {userRole !== UserRoles.User && ownRole === UserRoles.Admin && (
          <DefaultButton iconName="user-unfollow" onClick={() => updateUserRole(UserRoles.User, userId)}>
            Разжаловать
          </DefaultButton>
        )}
        <DefaultButton
          iconName="delete-bin"
          className="delete-button"
          onClick={async () => {
            try {
              await performDeleteUserRequest(userId);
              setModalProps({ valid: true, show: true, text: 'Пользователь успешно удален' });
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
