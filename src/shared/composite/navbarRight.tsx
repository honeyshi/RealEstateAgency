import React from 'react';
import { NavbarContainer, NavbarItem, RemixIcon } from 'shared/base';

export const NavbarRight: React.FC = () => {
  return (
    <NavbarContainer ml="auto">
      <NavbarItem text="Подать объявление" to="/new-advertisment" linkClass="rounded-link text-accent" mt="1" mr="2" />
      <NavbarItem to="/login" linkClass="text-accent">
        <RemixIcon name="user-3" />
      </NavbarItem>
    </NavbarContainer>
  );
};
