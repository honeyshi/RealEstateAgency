import { StepSwitcher } from 'pageParts/stepsSwitcher';
import React from 'react';
import { Container, Section, TextField } from 'shared/base';
import { DefaultPage } from 'shared/layout/defaultPage';

export const CreateAdvertismentPage: React.FC = () => {
  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid>
          <TextField center tag="h2" mb="5">
            Новое объявление
          </TextField>
          <StepSwitcher />
        </Container>
      </Section>
    </DefaultPage>
  );
};
