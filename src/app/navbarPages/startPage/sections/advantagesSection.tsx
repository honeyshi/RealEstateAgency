import React from 'react';
import { Container, Icon, Row, Section, TextField } from 'shared/base';
import { Advantage } from 'pageParts/advantage';

type SizeType = string;

const size: SizeType = '3rem';

export const AdvantagesSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Наши преимущества
        </TextField>
        <Row justifyContent="between">
          <Advantage
            header="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque.">
            <Icon name="home" style={{ height: size, width: size }} />
          </Advantage>
          <Advantage
            header="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque.">
            <Icon name="home" style={{ height: size, width: size }} />
          </Advantage>
          <Advantage
            header="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque.">
            <Icon name="home" style={{ height: size, width: size }} />
          </Advantage>
        </Row>
      </Container>
    </Section>
  );
};
