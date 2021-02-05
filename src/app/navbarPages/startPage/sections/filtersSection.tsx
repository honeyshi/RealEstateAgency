import React from 'react';
import { Block, Column, Container, Flexbox, Row, Section, TextField } from 'shared/base';
import { StartPageFilters } from 'pageParts/filters';

export const FiltersSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
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
