import { NavbarContainer, NavbarItem } from 'shared/base';
import React, { useMemo, useState } from 'react';

const navbarItems = [
  { text: 'Объявления', to: '/flats', key: 'navbar-flats' },
  { text: 'На карте', to: '/flats-map', key: 'navbar-flats-map' },
  { text: 'Тарифы', to: '/pricing', key: 'navbar-pricing' },
  { text: 'Поиск соарендаторов', to: '/search-roommates', key: 'navbar-search-roommates' },
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
