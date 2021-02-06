import React, { useMemo, useState } from 'react';
import { NavbarContainer, NavbarItem } from 'shared/base';

const navbarItems = [
  { text: 'Объявления', to: '/advert', key: 'navbar-advert' },
  { text: 'На карте', to: '/flats-map', key: 'navbar-flats-map' },
  { text: 'Тарифы', to: '/rates', key: 'navbar-rates' },
  { text: 'Поиск сожителей', to: '/search-roommates', key: 'navbar-search-roommates' },
];

export const NavbarLeft: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const navbarItemComponents = useMemo(() => {
    const innerNavbar = navbarItems.map((navbarItem) => {
      return (
        <NavbarItem
          isActive={activeItem === navbarItem.key}
          text={navbarItem.text}
          to={navbarItem.to}
          onClick={() => setActiveItem(navbarItem.key)}
          key={navbarItem.key}
          mr="2"
        />
      );
    });
    return innerNavbar;
  }, [activeItem]);
  return <NavbarContainer>{navbarItemComponents}</NavbarContainer>;
};
