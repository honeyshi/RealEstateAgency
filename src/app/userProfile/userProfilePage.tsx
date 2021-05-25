import { CheckBox, Flexbox, TextField } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { LeftMenuLinks } from 'shared/leftMenu';
import { RightContainerPage } from 'shared/layout/rightContainerPage';
import { history } from 'core/history';
import { useLocation } from 'react-router-dom';

enum PagesLink {
  Information = '/profile/info',
  OwnAdvertisments = '/profile/my-advertisments',
  FavouriteAdvertisments = '/profile/favourite-advertisments',
  Subscription = '/profile/subscription',
  CreateSubscription = '/profile/create-subscription',
  MyPricing = '/profile/my-pricing',
  OwnCoRequest = '/profile/my-cotenant-request',
  AdminAdvertisments = '/profile/admin/advertisments',
  AdminClaims = '/profile/admin/claims',
  AdminUsers = '/profile/admin/users',
  CreateCoRequest = '/profile/create-cotenant-request',
}

const userRole = '2';

export const UserProfilePage: React.FC<{ activeSubPage: JSX.Element }> = ({ activeSubPage }) => {
  const [activeMenu, setActiveMenu] = useState('/profile/info');
  const [adminState, setAdminState] = useState(false);

  const currentUserRole = localStorage.getItem('userRole');

  let location = useLocation();

  const changeLocation = (link: string, adminState: boolean) => {
    setActiveMenu(link);
    setAdminState(adminState);
  };

  useEffect(() => {
    changeLocation(location.pathname, location.pathname.includes('admin'));
  }, [location.pathname]);

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
                  { iconName: 'emotion-unhappy', header: 'Активные жалобы', link: PagesLink.AdminClaims },
                  { iconName: 'contacts', header: 'Список пользователей', link: PagesLink.AdminUsers },
                ]}
              />
            </>
          ) : (
            <LeftMenuLinks
              activeLink={activeMenu}
              leftMenuItems={[
                { iconName: 'account-box', header: 'Мои данные', link: PagesLink.Information },
                { iconName: 'heart-3', header: 'Избранное', link: PagesLink.FavouriteAdvertisments },
                { iconName: 'file-edit', header: 'Мои объявления', link: PagesLink.OwnAdvertisments },
                { iconName: 'coins', header: 'Тарифный план', link: PagesLink.MyPricing },
                { iconName: 'mail-send', header: 'Подписки', link: PagesLink.Subscription },
                { iconName: 'group', header: 'Поиск соарендатора', link: PagesLink.OwnCoRequest },
              ]}
            />
          )}
        </>
      }>
      {activeSubPage}
    </RightContainerPage>
  );
};
