import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarItem } from 'shared/base';

const navbarItems = [
  { text: 'Квартиры на карте', to: '/flats-map', key: 'navbar-flats-map' },
  { text: 'Тарифы', to: '/rates', key: 'navbar-rates' },
  { text: 'О нас', to: '/about', key: 'navbar-about' },
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
  return (
    <ul className="navbar-nav">
      <Link to="/" className="navbar-brand" onClick={() => setActiveItem('')}>
        Название
      </Link>
      {navbarItemComponents}
    </ul>
  );
};
