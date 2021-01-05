import React from 'react';
import { Block, Icon, NavbarContainer, NavbarItem } from 'shared/base';

export const NavbarRight: React.FC = () => {
  return (
    <NavbarContainer ml="auto">
      <NavbarItem text="Нижний Новгород" to="/" mr="2" linkClass="d-flex">
        <Block pl="2" pr="2">
          <Icon name="location-arrow" />
        </Block>
      </NavbarItem>
      <NavbarItem text="Войти" to="/signin" linkClass="rounded-link" mt="1" />
    </NavbarContainer>
  );
};
