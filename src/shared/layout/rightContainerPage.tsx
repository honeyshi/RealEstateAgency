import './rightContainerPageStyle.scss';

import { Column, Container, Flexbox, RemixIcon, TextField } from 'shared/base';

import { Link } from 'react-router-dom';
import { NavbarLeft } from 'shared/composite/navbarLeft';
import { NavbarRight } from 'shared/composite/navbarRight';
import React from 'react';

interface IRightContainerPageProps {
  header: string;
  leftMenu: JSX.Element;
}

export const RightContainerPage: React.FC<IRightContainerPageProps> = ({ header, leftMenu, children }) => {
  return (
    <Container flex px="0" className="right-container-page">
      <Column size={3} px="0" className="shadow left-container">
        <Flexbox vertical alignItems="center" mt="5">
          <Link to="/" className="navbar-brand text-accent">
            <Flexbox>
              <RemixIcon name="home-heart" />
              <TextField tag="span" ml="2">
                dwelly.
              </TextField>
            </Flexbox>
          </Link>
          <TextField center tag="h2" my="5">
            {header}
          </TextField>
        </Flexbox>
        {leftMenu}
      </Column>
      <Column size={8} mx="5" className="right-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavbarLeft />
          <NavbarRight />
        </nav>
        {children}
      </Column>
    </Container>
  );
};
