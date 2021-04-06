import React, { useState } from 'react';

import { LeftMenu } from 'shared/leftMenu';
import { ProfileInformationPage } from './profielInformationPage';
import { RightContainerPage } from 'shared/layout/rightContainerPage';

export const UserProfilePage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const renderSwitch = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        return <ProfileInformationPage />;
    }
  };
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
      {renderSwitch(activeMenu)}
    </RightContainerPage>
  );
};
