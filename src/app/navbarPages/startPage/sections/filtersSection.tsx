import React from 'react';
import { Link } from 'react-router-dom';

import { Block, Column, Container, Flexbox, Image, RemixIcon, Row, Section, TextField } from 'shared/base';
import { StartPageFilters } from 'pageParts/filters';
import image from 'icons/startpage.svg';

export const FiltersSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <Link to="#" className="d-md-flex d-none mr-2 text-accent">
          Нижний Новгород
          <Block px="2">
            <RemixIcon name="map-pin-5" />
          </Block>
        </Link>
        <Row pb="5" alignItems="center">
          <Column size={7}>
            <Flexbox justifyContent="center" vertical>
              <TextField tag="h2" my="5">
                Снимай жильё из первых рук
              </TextField>
              <TextField>
                Множество объектов недвижимости в долгосрочную аренду <br /> от собственников на одном сайте.
              </TextField>
            </Flexbox>
          </Column>
          <Column size={5}>
            <Image src={image} />
          </Column>
        </Row>
        <StartPageFilters />
      </Container>
    </Section>
  );
};
