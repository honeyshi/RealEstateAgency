import './navbar.scss';

import { Button, Container, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { NavbarLeft } from 'shared/composite/navbarLeft';
import { NavbarRight } from 'shared/composite/navbarRight';
import { NavbarSmall } from 'shared/composite/navbarSmall';
import classNames from 'classnames';

export const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const defaultNavbarClasses = classNames('mr-auto navbar-collapse collapse');
  const smallNavbarClasses = classNames('navbar-small collapse', { show: show });
  const buttonClasses = classNames('navbar-toggler', { collapsed: !show });
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white">
      <Container nonFluid>
        <Link to="/" className="navbar-brand text-accent">
          <Flexbox>
            <RemixIcon name="home-heart" />
            <TextField tag="span" ml="2">
              dwelly.
            </TextField>
          </Flexbox>
        </Link>
        <div className={defaultNavbarClasses}>
          <NavbarLeft />
          <NavbarRight />
        </div>
        <Button className={buttonClasses} ml="auto" onClick={() => setShow(!show)}>
          {show ? <RemixIcon name="close" /> : <RemixIcon name="menu" />}
        </Button>
      </Container>
      <Container nonFluid className={smallNavbarClasses}>
        <div className="py-2 py-lg-0">
          <NavbarSmall />
        </div>
      </Container>
    </nav>
  );
};
