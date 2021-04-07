import React, { useEffect, useState } from 'react';

import { LeftMenu } from 'shared/leftMenu';
import { ProfileInformationPage } from './profielInformationPage';
import { RightContainerPage } from 'shared/layout/rightContainerPage';
import { history } from 'core/history';

export const UserProfilePage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activePage, setActivePage] = useState(<ProfileInformationPage />);

  useEffect(() => {
    switch (activeMenu) {
      case 1:
        history.push(`/profile/info`);
        setActivePage(<ProfileInformationPage />);
    }
  }, [activeMenu]);

  return (
    <RightContainerPage
      header="Профиль"
      leftMenu={
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
      }>
      {activePage}
    </RightContainerPage>
  );
};
