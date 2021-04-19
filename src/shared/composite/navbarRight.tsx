import { NavbarContainer, NavbarItem, RemixIcon } from 'shared/base';

import React from 'react';

export const NavbarRight: React.FC = () => {
  const authInfo = localStorage.getItem('authInfo');
  const userIconLink = authInfo == null ? '/login' : '/profile';
  return (
    <NavbarContainer ml="auto">
      <NavbarItem text="Подать объявление" to="/new-advertisment" linkClass="rounded-link text-accent" mt="1" mr="2" />
      <NavbarItem to={userIconLink} linkClass="text-accent">
        <RemixIcon name="user-3" />
      </NavbarItem>
    </NavbarContainer>
  );
};
