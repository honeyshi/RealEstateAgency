import { Block, NavbarContainer, NavbarItem, RemixIcon } from 'shared/base';
import React, { useMemo } from 'react';

const navbarItems = [
  { text: 'Объявления', to: '/flats', key: 'navbar-advert' },
  { text: 'Квартиры на карте', to: '/flats-map', key: 'navbar-flats-map' },
  { text: 'Тарифы', to: '/pricing', key: 'navbar-pricing' },
  { text: 'Поиск соарендаторов', to: '/search-roommates', key: 'navbar-search-roommates' },
];

export const NavbarSmall: React.FC = () => {
  const navbarItemComponents = useMemo(() => {
    const innerNavbar = navbarItems.map((navbarItem) => {
      return <NavbarItem text={navbarItem.text} to={navbarItem.to} key={navbarItem.key} mr="2" />;
    });
    return innerNavbar;
  }, []);

  const authInfo = localStorage.getItem('authInfo');
  const isAuth = authInfo != null;

  return (
    <NavbarContainer>
      <NavbarItem text="Нижний Новгород" to="#" mr="2" linkClass="d-flex">
        <Block px="2">
          <RemixIcon name="map-pin-5" />
        </Block>
      </NavbarItem>
      {isAuth ? <NavbarItem text="Профиль" to="/profile" mt="1" /> : <NavbarItem text="Войти" to="/login" mt="1" />}
      <NavbarItem text="Подать объявление" to="/new-advertisment" mt="1" />
      {navbarItemComponents}
    </NavbarContainer>
  );
};
