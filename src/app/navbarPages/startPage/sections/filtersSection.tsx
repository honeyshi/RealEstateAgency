import React from 'react';
import { Block, Column, Container, Flexbox, Row, Section, TextField } from 'shared/base';
import { StartPageFilters } from 'pageParts/filters';

export const FiltersSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <Row pb="5">
          <Column>
            <Flexbox justifyContent="center" vertical>
              <TextField tag="h2" mb="5" mt="5">
                Снимай жильё из первых рук
              </TextField>
              <TextField>
                Множество объектов недвижимости в долгосрочную аренду от собственников на одном сайте.
              </TextField>
            </Flexbox>
          </Column>
          <Column>
            <Block bg="light" h="100" />
          </Column>
        </Row>
        <StartPageFilters />
      </Container>
    </Section>
  );
};
