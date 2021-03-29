import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Flexbox, Icon, RemixIcon, TextField } from 'shared/base';
import { NavbarLeft } from 'shared/composite/navbarLeft';
import { NavbarRight } from 'shared/composite/navbarRight';
import { NavbarSmall } from 'shared/composite/navbarSmall';

import './navbar.scss';

export const Navbar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const defaultNavbarClasses = classNames('mr-auto navbar-collapse collapse');
  const smallNavbarClasses = classNames('navbar-small collapse', { show: show });
  const buttonClasses = classNames('navbar-toggler', { collapsed: !show });
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
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
          {show ? <Icon name="times" /> : <Icon name="bars" />}
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
