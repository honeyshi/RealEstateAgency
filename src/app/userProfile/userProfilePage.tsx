import { CheckBox, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { AdminAdvertismentsListPage } from './adminAdvertismentsListPage';
import { CreateCoRequestPage } from './createCoRequestPage';
import { LeftMenuLinks } from 'shared/leftMenu';
import { ProfileInformationPage } from './profielInformationPage';
import { RightContainerPage } from 'shared/layout/rightContainerPage';
import { history } from 'core/history';
import { useLocation } from 'react-router-dom';

enum PagesLink {
  Information = '/profile/info',
  AdminAdvertisments = '/profile/admin/advertisments',
  CreateCoRequest = '/profile/create-cotenant-request',
}

const userRole = '2';

export const UserProfilePage: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(PagesLink.Information);
  const [activePage, setActivePage] = useState(<ProfileInformationPage />);
  const [adminState, setAdminState] = useState(false);

  const currentUserRole = localStorage.getItem('userRole');

  let location = useLocation();

  const changeLocation = (link: PagesLink, adminState: boolean, page: JSX.Element) => {
    setActiveMenu(link);
    setAdminState(adminState);
    setActivePage(page);
  };

  useEffect(() => {
    switch (location.pathname) {
      case PagesLink.Information:
        changeLocation(PagesLink.Information, false, <ProfileInformationPage />);
        break;
      case PagesLink.AdminAdvertisments:
        if (currentUserRole !== userRole)
          changeLocation(PagesLink.AdminAdvertisments, true, <AdminAdvertismentsListPage />);
        break;
      case PagesLink.CreateCoRequest:
        changeLocation(PagesLink.CreateCoRequest, false, <CreateCoRequestPage />);
        break;
      default:
        break;
    }
  }, [activeMenu, adminState, currentUserRole, location.pathname]);

  return (
    <RightContainerPage
      header="Профиль"
      leftMenu={
        <>
          {currentUserRole !== userRole && (
            <Flexbox justifyContent="between" mb="5" mx="5">
              <TextField tag="span">Режим администратора</TextField>
              <CheckBox
                switcher
                name="admin-checkbox"
                value={adminState}
                onChange={(state) => {
                  setActiveMenu(state ? PagesLink.AdminAdvertisments : PagesLink.Information);
                  history.push(state ? PagesLink.AdminAdvertisments : PagesLink.Information);
                  setAdminState(state);
                }}
              />
            </Flexbox>
          )}
          {adminState ? (
            <>
              <LeftMenuLinks
                activeLink={activeMenu}
                leftMenuItems={[
                  { iconName: 'file-list', header: 'Объявления', link: PagesLink.AdminAdvertisments },
                  { iconName: 'emotion-unhappy', header: 'Активные жалобы', link: 'PagesLink.AdminAdvertisments' },
                  { iconName: 'contacts', header: 'Список пользователей', link: 'PagesLink.AdminAdvertisments' },
                ]}
              />
            </>
          ) : (
            <LeftMenuLinks
              activeLink={activeMenu}
              leftMenuItems={[
                { iconName: 'account-box', header: 'Мои данные', link: PagesLink.Information },
                { iconName: 'heart-3', header: 'Избранное', link: 'PagesLink.Information' },
                { iconName: 'file-edit', header: 'Мои объявления', link: ' PagesLink.Information' },
                { iconName: 'coins', header: 'Тарифный план', link: 'PagesLink.Information' },
                { iconName: 'mail-send', header: 'Подписки', link: 'PagesLink.Information ' },
                { iconName: 'group', header: 'Поиск соарендатора', link: PagesLink.CreateCoRequest },
              ]}
            />
          )}
        </>
      }>
      {activePage}
    </RightContainerPage>
  );
};
