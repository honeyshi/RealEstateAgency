import React from 'react';
import { Container } from 'shared/base';
import { NavbarLeft } from 'shared/composite/navbarLeft';
import { NavbarRight } from 'shared/composite/navbarRight';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Container nonFluid>
        <NavbarLeft />
        <NavbarRight />
      </Container>
    </nav>
  );
};
