import React from 'react';
import { Icon, NavbarContainer, NavbarItem } from 'shared/base';

export const NavbarRight: React.FC = () => {
  return (
    <NavbarContainer ml="auto">
      <NavbarItem text="Подать обявление" to="/new-advertisment" linkClass="rounded-link" mt="1" mr="2" />
      <NavbarItem to="/login">
        <Icon prefix="far" name="user" />
      </NavbarItem>
    </NavbarContainer>
  );
};
