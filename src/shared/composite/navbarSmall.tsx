import { Block, Icon, NavbarContainer, NavbarItem } from 'shared/base';
import React, { useMemo } from 'react';

const navbarItems = [
  { text: 'Объявления', to: '/advert', key: 'navbar-advert' },
  { text: 'Квартиры на карте', to: '/flats-map', key: 'navbar-flats-map' },
  { text: 'Тарифы', to: '/pricing', key: 'navbar-pricing' },
  { text: 'Поиск сожителей', to: '/search-roommates', key: 'navbar-search-roommates' },
];

export const NavbarSmall: React.FC = () => {
  const navbarItemComponents = useMemo(() => {
    const innerNavbar = navbarItems.map((navbarItem) => {
      return <NavbarItem text={navbarItem.text} to={navbarItem.to} key={navbarItem.key} mr="2" />;
    });
    return innerNavbar;
  }, []);

  return (
    <NavbarContainer>
      <NavbarItem text="Нижний Новгород" to="#" mr="2" linkClass="d-flex">
        <Block px="2">
          <Icon name="location-arrow" />
        </Block>
      </NavbarItem>
      <NavbarItem text="Войти" to="/login" mt="1" />
      <NavbarItem text="Подать объявление" to="/new-advertisment" mt="1" />
      {navbarItemComponents}
    </NavbarContainer>
  );
};
