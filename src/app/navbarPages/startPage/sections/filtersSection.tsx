import React from 'react';
import { Block, Column, Container, Flexbox, Icon, Row, Section, TextField } from 'shared/base';
import { StartPageFilters } from 'pageParts/filters';
import { Link } from 'react-router-dom';

export const FiltersSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <Link to="#" className="d-md-flex d-none mr-2 text-black-50">
          Нижний Новгород
          <Block px="2">
            <Icon name="location-arrow" />
          </Block>
        </Link>
        <Row pb="5" alignItems="center">
          <Column>
            <Flexbox justifyContent="center" vertical>
              <TextField tag="h2" my="5">
                Снимай жильё из первых рук
              </TextField>
              <TextField>
                Множество объектов недвижимости в долгосрочную аренду от собственников на одном сайте.
              </TextField>
            </Flexbox>
          </Column>
          <Column>
            <Block bg="light" style={{ height: '25rem' }} />
          </Column>
        </Row>
        <StartPageFilters />
      </Container>
    </Section>
  );
};
