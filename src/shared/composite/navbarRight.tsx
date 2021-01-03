import React from 'react';
import { NavbarItem } from 'shared/base';

export const NavbarRight: React.FC = () => {
  return (
    <ul className="navbar-nav ml-auto">
      <NavbarItem text="Нижний Новгород" to="/" mr="2" />
      <NavbarItem to="/" mr="2" mt="1">
        <i className="gg-pin" />
      </NavbarItem>
      <NavbarItem text="Войти" to="/signin" linkClass="rounded-link" ml="1" mr="2" mt="1" />
    </ul>
  );
};
