import { CheckBox, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { CreateCoRequestPage } from './createCoRequestPage';
import { LeftMenu } from 'shared/leftMenu';
import { ProfileInformationPage } from './profielInformationPage';
import { RightContainerPage } from 'shared/layout/rightContainerPage';
import { history } from 'core/history';

const userRole = '2';

export const UserProfilePage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activePage, setActivePage] = useState(<ProfileInformationPage />);
  const [adminState, setAdminState] = useState(false);

  useEffect(() => {
    if (history.location.pathname.includes('/profile/create-cotenant-request')) setActivePage(<CreateCoRequestPage />);
    else
      switch (activeMenu) {
        case 1:
          history.push('/profile/info');
          setActivePage(<ProfileInformationPage />);
      }
  }, [activeMenu]);

  return (
    <RightContainerPage
      header="Профиль"
      leftMenu={
        <>
          {localStorage.getItem('userRole') !== userRole && (
            <Flexbox justifyContent="between" mb="5" mx="5">
              <TextField tag="span">Режим администратора</TextField>
              <CheckBox
                switcher
                name="admin-checkbox"
                value={adminState}
                onChange={(state) => {
                  setActiveMenu(1);
                  setAdminState(state);
                }}
              />
            </Flexbox>
          )}
          {adminState ? (
            <>
              <LeftMenu
                activeItemIndex={activeMenu}
                leftMenuItems={[
                  { iconName: 'file-list', header: 'Объявления' },
                  { iconName: 'emotion-unhappy', header: 'Активные жалобы' },
                  { iconName: 'contacts', header: 'Список пользователей' },
                ]}
                setActiveMethod={setActiveMenu}
              />
            </>
          ) : (
            <LeftMenu
              activeItemIndex={activeMenu}
              leftMenuItems={[
                { iconName: 'account-box', header: 'Мои данные' },
                { iconName: 'heart-3', header: 'Избранное' },
                { iconName: 'file-edit', header: 'Мои объявления' },
                { iconName: 'coins', header: 'Тарифный план' },
                { iconName: 'mail-send', header: 'Подписки' },
                { iconName: 'group', header: 'Поиск соарендатора' },
              ]}
              setActiveMethod={setActiveMenu}
            />
          )}
        </>
      }>
      {activePage}
    </RightContainerPage>
  );
};
